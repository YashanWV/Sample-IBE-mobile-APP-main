package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.FlightSearchFilterDTO;
import com.ibedemo.backend.model.Airport;
import com.ibedemo.backend.model.Flight;
import com.ibedemo.backend.repo.FlightRepo;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.PrintStream;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class FlightService {

    @Autowired
    private FlightRepo flightRepo;

    public List<Flight> getAvailableFlights(
//            String arrivalAirportCode,
//                                            String departureAirportCode,
//                                            LocalDate departureDate,
//                                            String bookingClass,
//                                            int numberOfSeats
//                                            Map<String, Integer> seatAvailability
            FlightSearchFilterDTO flightSearchFilterDTO
    ) {

//        Map<String, Integer> seatAvailability = new HashMap<>();
//        seatAvailability.put(bookingClass, numberOfSeats);
//        PrintStream out = System.out;
//        out.println(seatAvailability);
//        return repo.getAllByArrivalAirportCodeEqualsAndDepartureAirportCodeEqualsAndDepartureDateEqualsAndSeatAvailabilityKeyAndSeatAvailabilityValueGreaterThanEqual(arrivalAirportCode, departureAirportCode, departureDate, bookingClass, numberOfSeats);
////
//        return repo.getAllByArrivalAirportCodeEqualsAndDepartureAirportCodeEqualsAndDepartureDateEqualsAndSeatAvailability(arrivalAirportCode, departureAirportCode, departureDate, seatAvailability);

        return flightRepo.getAvailableFlights(new Airport(flightSearchFilterDTO.getArrivalAirportCode()),
                new Airport(flightSearchFilterDTO.getDepartureAirportCode()),
                flightSearchFilterDTO.getDepartureDate(),
                flightSearchFilterDTO.getBookingClass(),
                flightSearchFilterDTO.getNumberOfSeats());
//                "Economy",
//                flightSearchFilterDTO.getSeatAvailability().get("Economy"),
//        "First",
//        flightSearchFilterDTO.getSeatAvailability().get("First"),
//        "Business",
//        flightSearchFilterDTO.getSeatAvailability().get("Business"));

    }
}
