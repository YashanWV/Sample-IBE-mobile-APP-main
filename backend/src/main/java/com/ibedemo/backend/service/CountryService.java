package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.CountryDTO;
import com.ibedemo.backend.model.Country;
import com.ibedemo.backend.repo.CountryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepo countryRepo;

    public List<CountryDTO> getCountries() {

        List<CountryDTO> countries = new ArrayList<>();

        for (Country country : countryRepo.getCountriesBy()) {
            CountryDTO countryDTO = new CountryDTO(country.getCountryName(), country.getCountryCode());
            countries.add(countryDTO);
        }

        return countries;
    }
}
