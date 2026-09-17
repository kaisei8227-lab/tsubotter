package com.example.tsubotter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tsubotter.model.User;

public interface UserRepository extends JpaRepository<User, String> {
}
