package com.ibedemo.backend.controller;

import com.ibedemo.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class MasterDataController {

    @Autowired
    private MasterDataService masterDataService;

    @GetMapping("getMasterData")
    public Map<String, Object> getMasterData(@RequestParam String param) {

        return masterDataService.getMasterData(param);

    }

}
