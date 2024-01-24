package com.lab4.backend.logic;

import com.lab4.backend.entity.Dot;

public class DotValidator {
    public static boolean isValid(Dot dot) {
        if (!(dot.getX() >= -5 && dot.getX() <= 3)) {
            return false;
        }
        if (!(dot.getY() > -5 && dot.getY() < 3)) {
            return false;
        }
        if(dot.getR() < 0){
            return false;
        }
        return true;
    }
}
