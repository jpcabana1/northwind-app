package com.api.springboot.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Entity.Customer;
import com.api.springboot.Repositories.CustomerRepository;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("get-all")
    public ResponseEntity<List<Customer>> getAll() {
        return ResponseEntity.ok(customerRepository.findAll());
    }
}