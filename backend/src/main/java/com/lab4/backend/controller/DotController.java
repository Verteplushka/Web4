package com.lab4.backend.controller;

import com.lab4.backend.dto.DotDto;
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

    @PostMapping
    public ResponseEntity<DotDto>  createDot(@RequestBody DotDto dotDto){
        DotDto savedDot = dotService.createDot(dotDto);
        return new ResponseEntity<>(savedDot, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DotDto> getDotById(@PathVariable Long id){
        DotDto foundDot = dotService.getDotById(id);
        return ResponseEntity.ok(foundDot);
    }

    @GetMapping
    public ResponseEntity<List<DotDto>> getAllDots(){
        List<DotDto> allDots = dotService.getAllDots();
        return ResponseEntity.ok(allDots);
    }

    @DeleteMapping("{id}")
    public void deleteDotById(@PathVariable Long id){
        dotService.deleteDotById(id);
    }

    @DeleteMapping
    public void deleteAllDots(){
        dotService.deleteAllDots();
    }
}
