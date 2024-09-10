package com.ibedemo.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Service
public class MasterDataService {

    @Autowired
    private AirportService airportService;

    @Autowired
    private CountryService countryService;

    @Autowired
    private NationalityService nationalityService;

    @Autowired
    private GenderService genderService;

    public Map<String, Object> getMasterData(String param) {

        Map<String, Object> masterData = new HashMap<>();


        if (param.equals("registration")) {
            masterData.put("Countries", countryService.getCountries());
            masterData.put("Nationalities", nationalityService.getNationalities());
            masterData.put("Genders", genderService.getGenders());
        }
        if (param.equals("flightSearch")) {
            masterData.put("Airports", airportService.getAirports());
        }

        return masterData;

    }
}
