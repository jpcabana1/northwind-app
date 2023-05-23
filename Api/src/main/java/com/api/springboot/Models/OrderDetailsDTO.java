package com.api.springboot.Models;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailsDTO {
    private String ProductName;
    private Integer Quantity;
    private BigDecimal UnitPrice;
    private BigDecimal Discount;
}
