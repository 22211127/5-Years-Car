package com.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
@ComponentScan(basePackages={"com.*"})
public class Chapter1Application {

    @RequestMapping("/")
    @ResponseBody
    public String index(){
//        return "Hello Spring Boot";

        return "index";
    }
    public static void main(String[] args) {
        SpringApplication.run(Chapter1Application.class, args);
    }
}