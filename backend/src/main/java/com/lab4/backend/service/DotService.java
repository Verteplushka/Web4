package com.lab4.backend.service;

import com.lab4.backend.dto.DotDto;

import java.util.List;

public interface DotService {
    DotDto createDot(DotDto dotDto);
    DotDto getDotById(Long id);
    List<DotDto> getAllDots();
    void deleteDotById(Long id);
    void deleteAllDots();
}
