package com.lab4.backend.service;

import com.lab4.backend.entity.Dot;

import java.time.LocalDate;

import static java.lang.System.nanoTime;

public class DotChecker {
    public static Dot checkDot(Dot dot) {
        dot.setCurrentTime(LocalDate.now());

        double x = dot.getX();
        double y = dot.getY();
        int r = dot.getR();

        long startTime = nanoTime();
        if ((x >= 0 && y >= 0 && y <= -x + (double) r / 2) ||
                (x <= 0 && y >= 0 && x * x + y * y <= r * r) ||
                (x <= 0 && y <= 0 && x >= (double) -r / 2 && y >= -r)) {
            dot.setResult("hit");
        } else {
            dot.setResult("miss");
        }

        dot.setScriptTime(nanoTime() - startTime);

        return dot;
    }
}
