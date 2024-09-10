package com.ibedemo.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class Gender {

    @Id
    @Column(unique = true, nullable = false)
    private int genderId;

    @Column(nullable = false)
    private String gender;

    public Gender(int genderId) {
        this.genderId = genderId;
    }

}
