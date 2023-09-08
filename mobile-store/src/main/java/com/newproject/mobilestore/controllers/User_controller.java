package com.newproject.mobilestore.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newproject.mobilestore.models.Login;
import com.newproject.mobilestore.models.Signup;
import com.newproject.mobilestore.services.User_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class User_controller {
    @Autowired
    User_service user_service;

    @PostMapping("signup")
    public ResponseEntity<?> Signup(@RequestBody Signup data) {
        try{
            boolean val=user_service.Register(data);
            if(val){
                 return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
            }
            else{
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
            }
    
        }
        catch(Exception e){
            System.out.println(e);

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request body");

        }
    }
    
    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody Login data) {
      
        try{
            Signup authenticatedUser = user_service.Login(data);

        if (authenticatedUser != null) {
            // User is authenticated, you can return a success response or JWT token here
            return ResponseEntity.ok("Login successful.");
        } else {
            // Authentication failed, return an error response
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed. Invalid email or password.");
        }
        }
         catch(Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request body");

        }

        

}
}
