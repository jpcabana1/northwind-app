package com.api.springboot.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HomeResultDTO {
     private String CustomerId;
     private String ContactName;
     private Integer OrdersCount;
}
