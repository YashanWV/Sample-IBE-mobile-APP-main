package com.ibedemo.backend.repo;

import com.ibedemo.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface BookingRepo extends JpaRepository<Booking, Integer> {
    List<Booking> findAllByUsername(String username);
}
