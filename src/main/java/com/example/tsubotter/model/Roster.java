package com.example.tsubotter.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "rosters")
@Data
public class Roster {
    @Id
    @Column(length = 6)
    private String studentNumber; // 学籍番号

    @Column(nullable = false)
    private String name;          // 氏名
}
