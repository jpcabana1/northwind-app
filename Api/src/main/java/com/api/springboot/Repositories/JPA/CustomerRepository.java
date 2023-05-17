package com.api.springboot.Repositories.JPA;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.springboot.Entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{}