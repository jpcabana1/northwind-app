package com.api.springboot.Models;

import java.io.Serializable;
import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDTO implements Serializable{
    private Integer OrderId;
    private String CustomerId;
    private String OrderDate;
    private String RequiredDate;
    private String ShippedDate;
    private Integer Quantity;
    private Long Discount;
    private BigDecimal UnitPrice;
    private String ProductName;
}