package com.ibedemo.backend.dto;

import lombok.Data;

@Data
public class GenderDTO {
    private String label;
    private int value;

    public GenderDTO(String label, int value) {
        this.label = label;
        this.value = value;
    }
}
