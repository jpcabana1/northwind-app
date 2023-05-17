package com.api.springboot.Controllers;

import java.util.Collections;
import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Entity.Customer;
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

    @GetMapping("get-all")
    public ResponseEntity<List<Customer>> getAll() {
        return ResponseEntity.ok(customerRepository.findAll());
    }

    @GetMapping("get-by-customer-id")
    public ResponseEntity<List<Customer>> getByCustomerId(@RequestParam String CustomerId) {
        var res = entityManager.createNativeQuery(CustomerQuery.GetCustomerById, Customer.class)
                                .setParameter("CustomerId", CustomerId)
                                .getResultList();

        return ResponseEntity.ok(res.size() > 0? res : Collections.<Customer>emptyList());

    }

}