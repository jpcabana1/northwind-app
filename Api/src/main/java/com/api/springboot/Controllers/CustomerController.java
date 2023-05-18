package com.api.springboot.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Entities.Customer;
import com.api.springboot.Models.CustomerDTO;
import com.api.springboot.Services.Interfaces.ICustomerService;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private ICustomerService CustomerService;

    @GetMapping()
    public ResponseEntity<List<Customer>> getAll() {
        return ResponseEntity.ok(CustomerService.getAll());
    }

    @GetMapping("get-by-customer-id")
    public ResponseEntity<List<Customer>> getByCustomerId(@RequestParam String CustomerId) {
        return ResponseEntity.ok(CustomerService.getByCustomerId(CustomerId));
    }

    @PostMapping
    public ResponseEntity<Customer> create(@RequestBody CustomerDTO newCustomer) {
        return new ResponseEntity<>(CustomerService.createCustomer(newCustomer), HttpStatus.CREATED);
    }

}