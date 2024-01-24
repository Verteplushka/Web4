package com.lab4.backend.repository;

import com.lab4.backend.entity.Dot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DotRepository extends JpaRepository<Dot, Long> {
    Optional<List<Dot>> findAllByUserId(long userId);
    void deleteAllByUserId(long userId);
}
