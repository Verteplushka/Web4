package com.lab4.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dots")
public class Dot implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double x;
    private double y;
    private int r;
    @Column(name = "currenttime")
    private LocalDate currentTime;
    @Column(name = "scripttime")
    private long scriptTime;
    private String result;

    public Dot(double x, double y, int r, LocalDate currentTime, long scriptTime, String result){
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.scriptTime = scriptTime;
        this.result = result;
    }

    @Override
    public String toString() {
        return "[x: " + getX() + "; y: " + getY() + "; r: " + getR() + "; currentTime: " + getCurrentTime() + "; scriptTime: " + getScriptTime() + "; result: " + getResult() + "]";
    }
}
