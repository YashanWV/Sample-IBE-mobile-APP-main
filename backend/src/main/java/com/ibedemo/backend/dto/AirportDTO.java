package com.ibedemo.backend.dto;

import lombok.Data;

@Data
public class AirportDTO {


    private String label;
    private String value;

    public AirportDTO(String label, String value) {
        this.label = label;
        this.value = value;
    }


}
