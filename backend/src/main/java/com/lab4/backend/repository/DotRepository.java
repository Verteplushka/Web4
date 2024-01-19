package com.lab4.backend.repository;

import com.lab4.backend.entity.Dot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DotRepository extends JpaRepository<Dot, Long> {
}
