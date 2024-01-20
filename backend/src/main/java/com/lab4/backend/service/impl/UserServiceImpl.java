package com.lab4.backend.service.impl;

import com.lab4.backend.dto.UserDto;
import com.lab4.backend.entity.User;
import com.lab4.backend.mapper.UserMapper;
import com.lab4.backend.repository.UserRepository;
import com.lab4.backend.service.UserService;
import exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public boolean checkUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User userFromTable = userRepository.findByLogin(user.getLogin()).orElse(null);
        if(userFromTable == null){
            return false;
        }
        return user.getPassword().equals(userFromTable.getPassword());
    }

    @Override
    public boolean addUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User userFromTable = userRepository.findByLogin(user.getLogin()).orElse(null);
        if(userFromTable != null){
            return false;
        }
        User savedUser = userRepository.save(user);
        return true;
    }
}
