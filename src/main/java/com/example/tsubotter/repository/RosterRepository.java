package com.example.tsubotter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tsubotter.model.Roster;

public interface RosterRepository extends JpaRepository<Roster, String> {
}
