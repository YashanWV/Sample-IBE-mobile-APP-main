package com.ibedemo.backend.dto;

import lombok.Data;

@Data
public class NationalityDTO {

    private String label;
    private int value;

    public NationalityDTO(String label, int value) {
        this.label = label;
        this.value = value;
    }
}
