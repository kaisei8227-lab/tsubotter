package com.example.tsubotter.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @Column(length = 6)
    private String studentNumber; // 学籍番号

    @Column(nullable = false)
    private String password;      // パスワード

    @Column(nullable = false, length = 20)
    private String nickname;

    @Column(nullable = false)
    private String department;    // 学科

    @Column(nullable = false)
    private String course;        // コース

    @Column(nullable = false)
    private String role = "STUDENT"; // STUDENT or ADMIN
}
