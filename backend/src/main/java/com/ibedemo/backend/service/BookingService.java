package com.ibedemo.backend.service;

import com.ibedemo.backend.model.Booking;
import com.ibedemo.backend.repo.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public List<Booking> getBookings(String username) {
        return bookingRepo.findAllByUsername(username);
    }
}
