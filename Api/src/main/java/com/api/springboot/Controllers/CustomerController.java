package com.api.springboot.Controllers;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
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
import com.api.springboot.Repositories.JPA.CustomerRepository;
import com.api.springboot.Repositories.Queries.CustomerQuery;

import lombok.var;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping()
    public ResponseEntity<List<Customer>> getAll() {
        return ResponseEntity.ok(customerRepository.findAll());
    }

    @GetMapping("get-by-customer-id")
    public ResponseEntity<List<Customer>> getByCustomerId(@RequestParam String CustomerId) {
        return ResponseEntity.ok(Optional.ofNullable(
                    entityManager.createNativeQuery(CustomerQuery.GetCustomerById, Customer.class)
                    .setParameter("CustomerId", CustomerId)
                    .getResultList())
                    .orElse(Collections.<Customer>emptyList()));

    }

    @PostMapping
    public ResponseEntity<Customer> create(@RequestBody CustomerDTO newCustomer) {
        ModelMapper modelMapper = new ModelMapper();
        Customer customer = modelMapper.map(newCustomer, Customer.class);
        Customer savedCustomer = customerRepository.save(customer);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

}