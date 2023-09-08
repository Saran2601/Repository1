import { Component, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signupmodel } from 'src/app/Models/Signupmodel';
import { Adminmodel } from 'src/app/Models/Adminmodel';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  userName!: string;
  email!:string
  password!: string;
  confirmPassword!: string;
  signupForm: FormGroup;
  isSmallScreen = false;
  data:Signupmodel=new Signupmodel();
  Admindata:Adminmodel=new Adminmodel();

  constructor(private router:Router,private formBuilder: FormBuilder,private apiservice: ApiServiceService) {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatchValidator });

  }

  private passwordsMatchValidator(control: AbstractControl | null) {
    if (!control) {
      return null;
    }
    const password = control.get('password')!.value;
    const confirmPassword = control.get('confirmPassword')!.value;
    if (password === confirmPassword) {
      return null;
    }  else {
      control.get('confirmPassword')!.setErrors({ passwordsNotMatch: true }); // Set error on confirmPassword control
      return { passwordsNotMatch: true };
    }
  }

  signup() {
    console.log(this.signupForm.value)
    if(this.signupForm.valid){
    if (this.signupForm.value.email.toLowerCase().trim()=="admin@gmail.com" && this.signupForm.value.password.trim()=="Admin@123" && this.signupForm.value.userName.trim().toLowerCase()=="admin"){
      this.Admindata.email=this.signupForm.value.email.toLowerCase().trim();
      this.Admindata.adminName=this.signupForm.value.userName.trim();
      this.Admindata.password=this.signupForm.value.password.trim();
      this.apiservice.adminSignup(this.Admindata).subscribe(

        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error.status );
          if (error.status==201){
            console.log("Admin registered Successfully");
            this.signupForm.reset();
            this.router.navigate(['/user/login']);
          }
          else if (error.status==409 ){
            console.log("Email already exists");
            this.signupForm.reset();
            this.router.navigate(['/user/login']);
          }
          else{
            console.log("An error occurred during registration.");
            this.signupForm.reset();
            this.router.navigate(['/user/signup']);
          }
        }
        )
    }
    else{
    this.data.email=this.signupForm.value.email.toLowerCase().trim();
    this.data.userName=this.signupForm.value.userName.trim();
    this.data.password=this.signupForm.value.password.trim();
    this.apiservice.userSignup(this.data).subscribe(

      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error.status );
        if (error.status==201){
          console.log("User registered Successfully");
          this.signupForm.reset();
          this.router.navigate(['/user/login']);
        }
        else if (error.status==409 ){
          console.log("Email already exists");
          this.signupForm.reset();
          this.router.navigate(['/user/login']);
        }
        else{
          console.log("An error occurred during registration.");
          this.signupForm.reset();
          this.router.navigate(['/user/signup']);
        }

      }
      )
    }
    }
  }
}


