package com.ibedemo.backend.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Map;

@Data
public class FlightSearchFilterDTO {
    private String arrivalAirportCode;
    private String departureAirportCode;
    private LocalDate departureDate;
    private String bookingClass;
    private int numberOfSeats;
//    private Map<String, Integer> seatAvailability;
}

//@Data
//public class FlightSearchFilterDTO {
//    private String arrivalAirport;
//    private String departureAirport;
//    private LocalDate departureDate;
//    private Map<String, Integer> seatAvailability;
//}
