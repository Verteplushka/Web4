package com.lab4.backend.service;

import com.lab4.backend.dto.DotDto;

import java.util.List;

public interface DotService {
    DotDto createDot(DotDto dotDto);
    List<DotDto> getAllDots();
    void deleteAllDots();
}
