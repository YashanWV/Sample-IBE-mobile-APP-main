package com.ibedemo.backend.repo;

import com.ibedemo.backend.model.Gender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface GenderRepo extends JpaRepository<Gender, Integer> {

    List<Gender> getGendersBy();
}
