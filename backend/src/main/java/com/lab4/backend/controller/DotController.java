package com.lab4.backend.controller;

import com.lab4.backend.dto.DotDto;
import com.lab4.backend.dto.UserDto;
import com.lab4.backend.dto.WrapperDto;
import com.lab4.backend.service.DotService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/dots")
public class DotController {
    private DotService dotService;

    @PostMapping("/createDot")
    public ResponseEntity<DotDto> createDot(@RequestBody WrapperDto wrapperDto){
        DotDto savedDot = dotService.createDot(wrapperDto.getUser(), wrapperDto.getDot());
        return new ResponseEntity<>(savedDot, HttpStatus.CREATED);
    }

    @PostMapping(path = "/getAllDots")
    public ResponseEntity<List<DotDto>> getAllDots(@RequestBody UserDto userDto){
        List<DotDto> allDots = dotService.getAllDots(userDto);
        return ResponseEntity.ok(allDots);
    }

    @PostMapping("/clear")
    public void deleteAllDots(@RequestBody UserDto userDto){
        dotService.deleteAllDots(userDto);
    }
}
