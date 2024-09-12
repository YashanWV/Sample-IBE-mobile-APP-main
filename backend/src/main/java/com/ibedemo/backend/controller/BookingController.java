package com.ibedemo.backend.controller;

import com.ibedemo.backend.model.Booking;
import com.ibedemo.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("getBookings")
    public List<Booking> getBookings(@RequestParam String username) {
        return bookingService.getBookings(username);
    }
}
