package com.api.springboot.Services.Interfaces;

import java.util.List;

import com.api.springboot.Entities.Customer;
import com.api.springboot.Models.CustomerDTO;

public interface ICustomerService {
    List<Customer> getAll();
    List<Customer> getByCustomerId(String CustomerId);
    Customer createCustomer(CustomerDTO newCustomer);
}
