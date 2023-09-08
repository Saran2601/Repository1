package com.newproject.mobilestore.services;

import com.newproject.mobilestore.models.Login;
import com.newproject.mobilestore.models.Admin;

public interface Admin_service {
    public abstract Boolean Register(Admin data);
    public abstract Admin Login (Login data);
    
}
