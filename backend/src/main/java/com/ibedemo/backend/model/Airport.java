package com.ibedemo.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class Airport {

    @Id
    @Column(unique = true, nullable = false)
    private String airportCode;

    @Column(nullable = false)
    private String airportName;

    @ManyToOne
    @JoinColumn(name = "country", nullable = false, referencedColumnName = "countryCode", foreignKey = @ForeignKey(name = "FK_COUNTRY"))
    private Country country;

    public Airport(String airportCode) {
        this.airportCode = airportCode;
    }
}
