package com.api.springboot.Services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
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

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public List<Customer> getByCustomerId(String CustomerId) {
        var sql = CustomerQuery.GetCustomerById;
        var parameters = new MapSqlParameterSource();
        parameters.addValue("CustomerId", CustomerId);
        var result = jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(Customer.class));
        return Optional.ofNullable(result).orElse(Collections.<Customer>emptyList());
    }

    @Override
    public Customer createCustomer(CustomerDTO newCustomer) {
        ModelMapper modelMapper = new ModelMapper();
        Customer customer = modelMapper.map(newCustomer, Customer.class);
        return customerRepository.save(customer);
    }
}
