package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.NationalityDTO;
import com.ibedemo.backend.model.Nationality;
import com.ibedemo.backend.repo.NationalityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NationalityService {

    @Autowired
    private NationalityRepo nationalityRepo;

    public List<NationalityDTO> getNationalities() {

        List<NationalityDTO> nationalities = new ArrayList<>();

        for (Nationality nationality : nationalityRepo.getNationalitiesBy()) {
            NationalityDTO nationalityDTO = new NationalityDTO(nationality.getNationality(), nationality.getNationalityId());
            nationalities.add(nationalityDTO);
        }

        return nationalities;
    }
}
