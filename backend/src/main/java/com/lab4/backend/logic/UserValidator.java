package com.lab4.backend.logic;

import com.lab4.backend.entity.User;

public class UserValidator {
    public static boolean isValid(User user){
        return user.getLogin() != null && user.getPassword() != null;
    }
}
