package com.example.tsubotter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan; // ★追加

@SpringBootApplication
@ComponentScan(basePackages = "com.example") // ★この行を追加（com.example 以下の全コントローラーを強制検出）
public class TsubotterApplication {

    public static void main(String[] args) {
        SpringApplication.run(TsubotterApplication.class, args);
    }
}