package com.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 *  * spring boot
 *  
 */
@Component
public class MyCommandRunner implements CommandLineRunner {
    @Override
    public void run(String... args) {
        System.out.println("开始自动加载指定的页面");
        try {
            Runtime.getRuntime().exec("cmd   /c   start   http://localhost:8080/");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}

