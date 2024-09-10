package com.ibedemo.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
@Table(name = "\"user\"")
public class User {

    @Id
    @Column(unique = true, nullable = false)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private LocalDate birthday;

    @ManyToOne
    @JoinColumn(name = "country", nullable = false, referencedColumnName = "countryCode", foreignKey = @ForeignKey(name = "FK_COUNTRY"))
    private Country country;

    @ManyToOne
    @JoinColumn(name = "nationality", nullable = false, referencedColumnName = "nationalityId", foreignKey = @ForeignKey(name = "FK_NATIONALITY"))
    private Nationality nationality;

    @ManyToOne
    @JoinColumn(name = "gender", nullable = false, referencedColumnName = "genderId", foreignKey = @ForeignKey(name = "FK_GENDER"))
    private Gender gender;

    @Column(unique = true, nullable = false)
    private String passport;

    @Column(unique = true, nullable = false)
    private String nic;

    @Column(nullable = false)
    private String fullName;

    @Column(unique = true, nullable = false)
    private String contact;

    @Column(unique = true, nullable = false)
    private String address;

}
