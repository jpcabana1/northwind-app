package com.api.springboot.Controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Models.OrdersDTO;
import com.api.springboot.Services.Interfaces.IOrdersService;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private IOrdersService service;

    @GetMapping("get-by-customer-id")
    public ResponseEntity<Collection<OrdersDTO>> getById(@RequestParam String CustomerId) {
       return ResponseEntity.ok(service.GetOrdersByCustomer(CustomerId));
    }
    
}