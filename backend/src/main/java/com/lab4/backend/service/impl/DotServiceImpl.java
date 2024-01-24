package com.lab4.backend.service.impl;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.dto.UserDto;
import com.lab4.backend.entity.Dot;
import com.lab4.backend.entity.User;
import com.lab4.backend.mapper.DotMapper;
import com.lab4.backend.mapper.UserMapper;
import com.lab4.backend.repository.DotRepository;
import com.lab4.backend.logic.DotChecker;
import com.lab4.backend.repository.UserRepository;
import com.lab4.backend.service.DotService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DotServiceImpl implements DotService {
    private DotRepository dotRepository;
    private UserRepository userRepository;

    @Override
    public DotDto createDot(UserDto userDto, DotDto dotDto) {
        Dot dot = DotMapper.mapToDot(dotDto);
        Dot checkedDot = DotChecker.checkDot(dot);
        User user = UserMapper.mapToUser(userDto);
        User foundUser = userRepository.findByLogin(user.getLogin()).orElse(null);
        if (foundUser == null) return null;
        checkedDot.setUserId(foundUser.getId());
        Dot savedDot = dotRepository.save(checkedDot);
        return DotMapper.mapToDotDto(savedDot);
    }

    @Override
    public List<DotDto> getAllDots(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User foundUser = userRepository.findByLogin(user.getLogin()).orElse(null);
        if (foundUser == null) return null;
        List<Dot> allDots = dotRepository.findAllByUserId(foundUser.getId()).orElse(new ArrayList<>());
        return allDots.stream().map(DotMapper::mapToDotDto).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void deleteAllDots(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User foundUser = userRepository.findByLogin(user.getLogin()).orElse(null);
        if (foundUser == null) return;

        dotRepository.deleteAllByUserId(foundUser.getId());
    }
}
