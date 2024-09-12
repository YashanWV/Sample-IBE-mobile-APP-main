package com.ibedemo.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class Booking {

    @Id
    @Column(nullable = false)
    private int bookingId;

//    private String departureAirportCode;
//
//    private String departureAirportName;

    @Column
    private String departureAirport;

    @Column
    private String arrivalAirport;



    @Column(columnDefinition = "DATE")
    private LocalDate departureDate;

    @Column(columnDefinition = "TIME")
    private LocalTime departureTime;

//    private String arrivalAirportCode;
//
//    private String arrivalAirportName;

    @Column
    private String departureCountry;

    @Column
    private String arrivalCountry;

    @Column(columnDefinition = "DATE")
    private LocalDate arrivalDate;

    @Column(columnDefinition = "TIME")
    private LocalTime arrivalTime;

    @Column(nullable = false)
    private String flightDesignator;

    @Column()
    private String ticketPrice;

//    @ElementCollection
//    @CollectionTable(name = "Booking_Class", joinColumns = @JoinColumn(name = "flight_id"))
//    @Column
//    private List<String> bookingClasses;
//
//
//    @Column(nullable = false)
//    private int numberOfSeats;

    @Column
    private String bookingClass;

    @Column
    private int numberOfSeats;

    @Column
    private String username;
}
