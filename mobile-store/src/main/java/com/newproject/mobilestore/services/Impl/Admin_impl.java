package com.newproject.mobilestore.services.Impl;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.newproject.mobilestore.repositories.Admin_repository;
import com.newproject.mobilestore.services.Admin_service;
import com.newproject.mobilestore.models.Admin;
import com.newproject.mobilestore.models.Login;


@Service
public class Admin_impl implements Admin_service {
 
    @Autowired
    private Admin_repository admin_repository;
      
    @Autowired
    private BCryptPasswordEncoder passwordEncoder; 

    @Override
    public Boolean Register(Admin data) {
      Optional<Admin> adminOptional = admin_repository.findByEmail(data.getEmail());
      if (adminOptional.isPresent()) {
        return false;
      }
      else{
      String encryptedPassword = passwordEncoder.encode(data.getPassword());
      data.setPassword(encryptedPassword);
      admin_repository.save(data);
      return true;
      }
    }

    @Override
    public Admin Login(Login data) {
      Optional<Admin> adminOptional = admin_repository.findByEmail(data.getEmail());

      if (adminOptional.isPresent()) {
          Admin user = adminOptional.get();

          if (passwordEncoder.matches(data.getPassword(), user.getPassword())) {
              return user;
          }
      }
      return null;
    
    }

   
    
}
