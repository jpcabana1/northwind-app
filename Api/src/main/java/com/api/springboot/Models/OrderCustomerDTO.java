package com.api.springboot.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderCustomerDTO {
    private Integer OrderId;
    private String OrderDate;
    private String ShippedDate;
    private String ShipAddress;
    private String ShipCity;
    private String ShipCountry;
    private String ShipPostalCode;
}
