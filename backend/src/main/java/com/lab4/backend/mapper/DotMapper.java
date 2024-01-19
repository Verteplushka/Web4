package com.lab4.backend.mapper;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.entity.Dot;

public class DotMapper {
    public static DotDto mapToDotDto(Dot dot){
        return new DotDto(
                dot.getId(),
                dot.getX(),
                dot.getY(),
                dot.getR(),
                dot.getCurrentTime(),
                dot.getScriptTime(),
                dot.getResult()
        );
    }

    public static Dot mapToDot(DotDto dotDto){
        return new Dot(
                dotDto.getId(),
                dotDto.getX(),
                dotDto.getY(),
                dotDto.getR(),
                dotDto.getCurrentTime(),
                dotDto.getScriptTime(),
                dotDto.getResult()
        );
    }
}
