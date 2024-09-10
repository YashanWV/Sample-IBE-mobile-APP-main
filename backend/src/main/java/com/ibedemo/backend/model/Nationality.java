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
public class Nationality {

    @Id
    @Column(unique = true, nullable = false)
    private int nationalityId;

    @Column(nullable = false)
    private String nationality;

    public Nationality(int nationalityId) {
        this.nationalityId = nationalityId;
    }
}
