package com.ibedemo.backend.repo;

import com.ibedemo.backend.model.Airport;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ibedemo.backend.model.Flight;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Repository
@EnableJpaRepositories
public interface FlightRepo extends JpaRepository<Flight, Integer> {

//    List<Flight> getAllByArrivalAirportCodeEqualsAndDepartureAirportCodeEqualsAndDepartureDateEqualsAndBookingClassesContainsAndNumberOfSeatsGreaterThanEqual(String arrivalAirportCode,
//                                                                                                                                                              String departureAirportCode,
//                                                                                                                                                              LocalDate departureDate,
//                                                                                                                                                              String bookingClasses,
//                                                                                                                                                              int numberOfSeats
//    );

//    List<Flight> getAllByArrivalAirportCodeEqualsAndDepartureAirportCodeEqualsAndDepartureDateEqualsAndSeatAvailabilityKeyAndSeatAvailabilityValueGreaterThanEqual(String arrivalAirportCode,
//                                                                                                                                                                   String departureAirportCode,
//                                                                                                                                                                   LocalDate departureDate,
//                                                                                                                                                                   String bookingClasses,
//                                                                                                                                                                   int numberOfSeats
//
////                                                                                                                                                                   Map<String, Integer> seatAvailability
//    );
//    @Query(" SELECT f from Flight f WHERE f.arrivalAirportCode = ?1 " +
//            " AND f.departureAirportCode = ?2 " +
//            " AND f.departureDate = ?3 " +
//            " AND ?4 MEMBER OF f.bookingClasses " +
//            " AND f.numberOfSeats >= ?5 ")
//    List<Flight> getAvailableFlights(String arrivalAirportCode,
//                                     String departureAirportCode,
//                                     LocalDate departureDate,
//                                     String bookingClasses,
//                                     int numberOfSeats);

    @Query(" SELECT f from Flight f WHERE f.arrivalAirport = ?1 " +
            " AND f.departureAirport = ?2 " +
            " AND f.departureDate = ?3 " +
            " AND f.seatAvailability[?4] >= ?5")
    List<Flight> getAvailableFlights(Airport arrivalAirport,
                                     Airport departureAirport,
                                     LocalDate departureDate,
                                     String bookingClasses,
                                     int numberOfSeats);

//    @Query(" SELECT f from Flight f WHERE f.arrivalAirport = ?1 " +
//            " AND f.departureAirport = ?2 " +
//            " AND f.departureDate = ?3 " +
//            " AND f.seatAvailability[?4] >= ?5" +
//            " AND f.seatAvailability[?6] >= ?7 " +
//            " AND f.seatAvailability[?8] >= ?9 ")
//    List<Flight> getAvailableFlights(Airport arrivalAirport,
//                                     Airport departureAirport,
//                                     LocalDate departureDate,
//                                     String economyClass,
//                                     int economyValue,
//                                     String firstClass,
//                                     int firstValue,
//                                     String businessClass,
//                                     int businessValue
//                                     );

}
