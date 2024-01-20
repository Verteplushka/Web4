package com.lab4.backend.mapper;

import com.lab4.backend.dto.UserDto;
import com.lab4.backend.entity.User;

public class UserMapper {
    public static UserDto mapToDtoUser(User user){
        return new UserDto(user.getId(), user.getLogin(), user.getPassword());
    }

    public static User mapToUser(UserDto userDto){
        return new User(userDto.getId(), userDto.getLogin(), userDto.getPassword());
    }
}
