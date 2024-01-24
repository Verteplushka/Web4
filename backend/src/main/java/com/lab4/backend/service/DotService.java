package com.lab4.backend.service;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.dto.UserDto;

import java.util.List;

public interface DotService {
    DotDto createDot(UserDto userDto, DotDto dotDto);
    List<DotDto> getAllDots(UserDto userDto);
    void deleteAllDots(UserDto userDto);
}
