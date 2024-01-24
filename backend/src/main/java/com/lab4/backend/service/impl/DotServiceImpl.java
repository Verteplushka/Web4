package com.lab4.backend.service.impl;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.dto.UserDto;
import com.lab4.backend.entity.Dot;
import com.lab4.backend.entity.User;
import com.lab4.backend.logic.DotValidator;
import com.lab4.backend.logic.UserValidator;
import com.lab4.backend.mapper.DotMapper;
import com.lab4.backend.mapper.UserMapper;
import com.lab4.backend.repository.DotRepository;
import com.lab4.backend.logic.DotChecker;
import com.lab4.backend.repository.UserRepository;
import com.lab4.backend.service.DotService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DotServiceImpl implements DotService {
    private DotRepository dotRepository;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public DotDto createDot(UserDto userDto, DotDto dotDto) {
        User user = findAndCheckuser(userDto);
        if(user == null) return null;

        Dot dot = DotMapper.mapToDot(dotDto);
        if(!DotValidator.isValid(dot)) return null;
        Dot checkedDot = DotChecker.checkDot(dot);

        checkedDot.setUserId(user.getId());
        Dot savedDot = dotRepository.save(checkedDot);
        return DotMapper.mapToDotDto(savedDot);
    }

    @Override
    public List<DotDto> getAllDots(UserDto userDto) {
        User user = findAndCheckuser(userDto);
        if (user == null) return null;
        List<Dot> allDots = dotRepository.findAllByUserId(user.getId()).orElse(new ArrayList<>());
        return allDots.stream().map(DotMapper::mapToDotDto).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void deleteAllDots(UserDto userDto) {
        User user = findAndCheckuser(userDto);
        if(user == null) return;
        dotRepository.deleteAllByUserId(user.getId());
    }

    private User findAndCheckuser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        if(!UserValidator.isValid(user)) return null;
        User foundUser = userRepository.findByLogin(user.getLogin()).orElse(null);
        if (foundUser == null) return null;
        if (passwordEncoder.matches(user.getPassword(), (foundUser.getPassword()))){
            return foundUser;
        }
        return null;
    }
}
