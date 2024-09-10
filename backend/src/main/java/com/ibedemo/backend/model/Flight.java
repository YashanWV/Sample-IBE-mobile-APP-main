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
public class Flight {

    @Id
    @Column(nullable = false)
    private int flightId;

//    private String departureAirportCode;
//
//    private String departureAirportName;

    @ManyToOne
    @JoinColumn(name = "departureAirport", nullable = false, referencedColumnName = "airportCode", foreignKey = @ForeignKey(name = "FK_DEPARTURE_AIRPORT"))
    private Airport departureAirport;

    @Column(columnDefinition = "DATE")
    private LocalDate departureDate;

    @Column(columnDefinition = "TIME")
    private LocalTime departureTime;

//    private String arrivalAirportCode;
//
//    private String arrivalAirportName;

    @ManyToOne
    @JoinColumn(name = "arrivalAirport", nullable = false, referencedColumnName = "airportCode", foreignKey = @ForeignKey(name = "FK_ARRIVAL_AIRPORT"))
    private Airport arrivalAirport;

    @Column(columnDefinition = "DATE")
    private LocalDate arrivalDate;

    @Column(columnDefinition = "TIME")
    private LocalTime arrivalTime;

    @Column(nullable = false)
    private String flightDesignator;

//    @ElementCollection
//    @CollectionTable(name = "Booking_Class", joinColumns = @JoinColumn(name = "flight_id"))
//    @Column
//    private List<String> bookingClasses;
//
//
//    @Column(nullable = false)
//    private int numberOfSeats;

    @ElementCollection
    @CollectionTable(name = "booking_classes_and_seats", joinColumns = @JoinColumn(name = "flight_id"))
    @MapKeyColumn(name = "booking_class")
    @Column(name = "number_of_seats")
    private Map<String, Integer> seatAvailability;
}
