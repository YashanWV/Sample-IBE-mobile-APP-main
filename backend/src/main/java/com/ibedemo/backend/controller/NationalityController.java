package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.NationalityDTO;
import com.ibedemo.backend.service.NationalityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class NationalityController {

    @Autowired
    private NationalityService nationalityService;

    @GetMapping("getNationalities")
    public List<NationalityDTO> getNationalities() {
        return nationalityService.getNationalities();
    }

}
