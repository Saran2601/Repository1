package com.newproject.mobilestore.services;

import com.newproject.mobilestore.models.Login;
import com.newproject.mobilestore.models.Signup;


public interface User_service {
    public abstract Boolean Register(Signup data);
    public abstract Signup Login (Login data);
    
}
