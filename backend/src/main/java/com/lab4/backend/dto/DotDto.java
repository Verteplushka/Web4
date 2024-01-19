package com.lab4.backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DotDto {
    private long id;
    private double x;
    private double y;
    private int r;
    private LocalDate currentTime;
    private long scriptTime;
    private String result;
}
