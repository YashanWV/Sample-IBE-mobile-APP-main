package com.ibedemo.backend.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
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
public class Country {

    @Id
    @Column(unique = true, nullable = false)
    private String countryCode;

    @Column(nullable = false)
    private String dialingCode;

    @Column(nullable = false)
    private String countryName;

    public Country (String countryCode) {
        this.countryCode = countryCode;
    }

//    @JsonCreator
//    public Country (@JsonProperty("countryCode") String countryCode) {
//        this.countryCode = countryCode;
//    }

}
