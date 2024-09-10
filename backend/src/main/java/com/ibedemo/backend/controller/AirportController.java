package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.AirportDTO;
import com.ibedemo.backend.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class AirportController {

    @Autowired
    private AirportService airportService;

    @GetMapping("getAirports")
    public List<AirportDTO> getAirports() {
        return airportService.getAirports();
    }

}
