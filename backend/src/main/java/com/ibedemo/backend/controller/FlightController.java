package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.FlightSearchFilterDTO;
import com.ibedemo.backend.model.Flight;
import com.ibedemo.backend.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class FlightController {

    @Autowired
    private FlightService flightService;

//    @GetMapping("availableflights")
//    public List<Flight> getAvailableFlights(@RequestParam String arrivalAirportCode,
//                                            @RequestParam String departureAirportCode,
//                                            @RequestParam LocalDate departureDate,
//                                            @RequestParam String bookingClasses,
//                                            @RequestParam int numberOfSeats
//                                            ) {
//
//        return service.getAvailableFlights(arrivalAirportCode, departureAirportCode, departureDate, bookingClasses, numberOfSeats);
//
//    }

    @PostMapping("availableFlights")
    public List<Flight> getAvailableFlights(@RequestBody FlightSearchFilterDTO flightSearchFilterDTO) {
        return flightService.getAvailableFlights(
                flightSearchFilterDTO
//                flightSearchFilterDTO.getArrivalAirportCode(),
//                flightSearchFilterDTO.getDepartureAirportCode(),
//                flightSearchFilterDTO.getDepartureDate(),
//                flightSearchFilterDTO.getBookingClass(),
//                flightSearchFilterDTO.getNumberOfSeats()
//                flightSearchFilterDTO.getSeatAvailability()
        );
    }

}
