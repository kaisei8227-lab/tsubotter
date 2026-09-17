package com.example.tsubotter.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String studentNumber;
    private String nickname;
    private String department;
    private String course;
    private String password;
}
