package com;

public class CarImpl implements Car {
    //position
    private int x, y;
    //park dimension
    private int px, py;

    private String orientation;

    @Override
    public void move(String command) throws Exception {
        if (command.equals("clockwise")) {
            switch (orientation) {
                case "N":
                    orientation = "E";
                    break;
                case "E":
                    orientation = "S";
                    break;
                case "S":
                    orientation = "W";
                    break;
                case "W":
                    orientation = "N";
                    break;
            }
        } else if (command.equals("forward")) {
            switch (orientation) {
                case "N": {
                    if (y + 1 > py) {
                        throw new Exception("out of boundary");
                    } else {
                        y++;
                    }
                    break;
                }
                case "E":
                    if (x + 1 > px) {
                        throw new Exception("out of boundary");
                    } else {
                        x++;
                    }
                    break;
                case "S":
                    if (y - 1 == 0) {
                        throw new Exception("out of boundary");
                    } else {
                        y--;
                    }
                    break;
                case "W":
                    if (x - 1 == 0) {
                        throw new Exception("out of boundary");
                    } else {
                        x--;
                    }
                    break;
            }
        }

    }

    public CarImpl(int x, int y, int px, int py, String orientation) {
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
        this.orientation = orientation;
    }

    @Override
    public int getPositionX() {
        return x;
    }

    @Override
    public int getPositionY() {
        return y;
    }

    @Override
    public String getOrientation() {
        return orientation;
    }
}
