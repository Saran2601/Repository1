import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginmodel } from 'src/app/Models/Loginmodel';
import { ApiServiceService } from 'src/app/Services/api-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  isSmallScreen = false;
  email!: string;
  password!: string;
  showSpinner: any;
  loginForm: FormGroup;
  user!: SocialUser;
  data:Loginmodel=new Loginmodel();


  isLoggedin: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private socialAuthService: SocialAuthService, private http: HttpClient,private apiservice:ApiServiceService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
    });

    console.log("hello");
  }

  login() {
    if (this.loginForm.valid){
      if (this.loginForm.value.email.trim().toLowerCase()=="admin@gmail.com" && this.loginForm.value.password.trim()=="Admin@123"){
        this.data.email=this.loginForm.value.email.trim().toLowerCase();
        this.data.password=this.loginForm.value.password.trim();
        this.apiservice.adminLogin(this.data).subscribe(
          (response:any)=>{
            console.log(response);
          },
          (error:any)=>{
            if (error.status==200){
              console.log("login successfull");
              this.loginForm.reset();
              this.router.navigate(['/admin/items'])

            }
            else if (error.status==401){
              console.log("Email or Password incorrect");
              this.loginForm.reset();
              this.router.navigate(['/user/login'])
            }
            else{
              console.log("An error occurred during Login.");
              this.loginForm.reset();
              this.router.navigate(['/user/login'])
            }
          }
        )
      }
      else{
        this.data.email=this.loginForm.value.email.trim().toLowerCase();
        this.data.password=this.loginForm.value.password.trim();
        this.apiservice.userLogin(this.data).subscribe(
          (response:any)=>{
            console.log(response);
          },
          (error:any)=>{
            if (error.status==200){
              console.log("login successfull");
              this.loginForm.reset();
              this.router.navigate(['/dashboard'])

            }
            else if (error.status==401){
              console.log("Email or Password incorrect");
              this.loginForm.reset();
              this.router.navigate(['/user/login'])
            }
            else{
              console.log("An error occurred during Login.");
              this.loginForm.reset();
              this.router.navigate(['/user/login'])
            }
          }
        )

      }
    }

  }

}
