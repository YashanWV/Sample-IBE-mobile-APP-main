package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.GenderDTO;
import com.ibedemo.backend.model.Gender;
import com.ibedemo.backend.repo.GenderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GenderService {

    @Autowired
    private GenderRepo genderRepo;

    public List<GenderDTO> getGenders() {

        List<GenderDTO> genders = new ArrayList<>();

        for (Gender gender : genderRepo.getGendersBy()) {
            GenderDTO genderDTO = new GenderDTO(gender.getGender(), gender.getGenderId());
            genders.add(genderDTO);
        }

        return genders;
    }
}
