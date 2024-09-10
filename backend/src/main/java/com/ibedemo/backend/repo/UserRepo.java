package com.ibedemo.backend.repo;

import com.ibedemo.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, String> {
    User findByUsername(String username);

    User findByPassport(String passport);

    User findByNic(String nic);

    User findByContact(String contact);

    User findByAddress(String address);

}
