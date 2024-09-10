package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.GenderDTO;
import com.ibedemo.backend.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class GenderController {

    @Autowired
    private GenderService genderService;

    @GetMapping("getGenders")
    public List<GenderDTO> getGenders() {
        return genderService.getGenders();
    }

}
