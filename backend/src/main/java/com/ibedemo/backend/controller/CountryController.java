package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.CountryDTO;
import com.ibedemo.backend.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("getCountries")
    public List<CountryDTO> getCountries() {
        return countryService.getCountries();
    }
}
