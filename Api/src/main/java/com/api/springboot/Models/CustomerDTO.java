package com.api.springboot.Models;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO implements Serializable {
    
    @JsonProperty("CustomerId")
    private String CustomerId;
    @JsonProperty("CompanyName")
    private String CompanyName;
    @JsonProperty("ContactName")
    private String ContactName;
    @JsonProperty("ContactTitle")
    private String ContactTitle;
    @JsonProperty("Address")
    private String Address;
    @JsonProperty("City")
    private String City;
    @JsonProperty("PostalCode")
    private String PostalCode;
    @JsonProperty("country")
    private String Country;
    @JsonProperty("Phone")
    private String Phone;
    @JsonProperty("Fax")
    private String Fax;
}
