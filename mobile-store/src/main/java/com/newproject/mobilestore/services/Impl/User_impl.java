package com.newproject.mobilestore.services.Impl;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.newproject.mobilestore.repositories.User_repository;
import com.newproject.mobilestore.services.User_service;
import com.newproject.mobilestore.models.Signup;
import com.newproject.mobilestore.models.Login;


@Service
public class User_impl implements User_service {
 
    @Autowired
    private User_repository user_repository;
      
    @Autowired
    private BCryptPasswordEncoder passwordEncoder; 

    @Override
    public Boolean Register(Signup data) {
      Optional<Signup> userOptional = user_repository.findByEmail(data.getEmail());
      if (userOptional.isPresent()) {
        return false;
      }
      else{
      String encryptedPassword = passwordEncoder.encode(data.getPassword());
      data.setPassword(encryptedPassword);
      user_repository.save(data);
      return true;
      }
    }

    @Override
    public Signup Login(Login data) {
      Optional<Signup> userOptional = user_repository.findByEmail(data.getEmail());

      if (userOptional.isPresent()) {
          Signup user = userOptional.get();

          if (passwordEncoder.matches(data.getPassword(), user.getPassword())) {
              return user;
          }
      }
      return null;
    
    }

   
    
}
