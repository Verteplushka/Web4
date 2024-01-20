package com.lab4.backend.service;

import com.lab4.backend.dto.UserDto;

public interface UserService {
    public boolean checkUser(UserDto userDto);
    public boolean addUser(UserDto userDto);

}
