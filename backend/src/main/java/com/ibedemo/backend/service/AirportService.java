package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.AirportDTO;
import com.ibedemo.backend.model.Airport;
import com.ibedemo.backend.repo.AirportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AirportService {

    @Autowired
    private AirportRepo airportRepo;

    public List<AirportDTO> getAirports() {
        List<AirportDTO> airports = new ArrayList<>();

        for (Airport airport : airportRepo.getAirportsBy()) {
            AirportDTO airportDTO = new AirportDTO(airport.getAirportName(), airport.getAirportCode());
            airports.add(airportDTO);
        }

        return airports;
    }
}
