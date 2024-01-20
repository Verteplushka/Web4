package com.lab4.backend.service.impl;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.entity.Dot;
import com.lab4.backend.mapper.DotMapper;
import com.lab4.backend.repository.DotRepository;
import com.lab4.backend.service.DotChecker;
import com.lab4.backend.service.DotService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DotServiceImpl implements DotService {
    private DotRepository dotRepository;
    @Override
    public DotDto createDot(DotDto dotDto) {
        Dot dot = DotMapper.mapToDot(dotDto);
        Dot checkedDot = DotChecker.checkDot(dot);
        Dot savedDot = dotRepository.save(checkedDot);
        return DotMapper.mapToDotDto(savedDot);
    }

    @Override
    public List<DotDto> getAllDots() {
        List<Dot> allDots = dotRepository.findAll();
        return allDots.stream().map(DotMapper::mapToDotDto).collect(Collectors.toList());
    }

    @Override
    public void deleteAllDots() {
        dotRepository.deleteAll();
    }
}
