package com.api.springboot.Services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.springboot.Entities.Customer;
import com.api.springboot.Models.CustomerDTO;
import com.api.springboot.Repositories.JPA.CustomerRepository;
import com.api.springboot.Repositories.Queries.CustomerQuery;
import com.api.springboot.Services.Interfaces.ICustomerService;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public List<Customer> getByCustomerId(String CustomerId) {
        return Optional.ofNullable(
                entityManager.createNativeQuery(CustomerQuery.GetCustomerById, Customer.class)
                        .setParameter("CustomerId", CustomerId)
                        .getResultList())
                .orElse(Collections.<Customer>emptyList());
    }

    @Override
    public Customer createCustomer(CustomerDTO newCustomer) {
        ModelMapper modelMapper = new ModelMapper();
        Customer customer = modelMapper.map(newCustomer, Customer.class);
        return customerRepository.save(customer);
    }
}
