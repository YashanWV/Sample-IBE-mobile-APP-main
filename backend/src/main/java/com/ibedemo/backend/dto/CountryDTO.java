package com.ibedemo.backend.dto;

import lombok.Data;

@Data
public class CountryDTO {

    private String label;
    private String value;

    public CountryDTO(String label, String value) {
        this.label = label;
        this.value = value;
    }
}
