package com.api.springboot.Controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Contracts.Services.IOrdersService;
import com.api.springboot.Models.OrderCustomerDTO;
import com.api.springboot.Models.OrderDetailsDTO;

@RestController
@RequestMapping("/orders")
public class OrdersController {
    
    @Autowired
    private IOrdersService service;

    @GetMapping("orders-by-customer-id")
    public ResponseEntity<Collection<OrderCustomerDTO>> getOrdersByCustomer(@RequestParam String customerId,
            @RequestParam Integer pageIndex, @RequestParam Integer pageSize) {
        return ResponseEntity.ok(service.getOrdersByCustomer(customerId, pageIndex, pageSize));
    }

    @GetMapping("order-details")
    public ResponseEntity<Collection<OrderDetailsDTO>> getOrderDetails(@RequestParam Integer orderId,
            @RequestParam Integer pageIndex, @RequestParam Integer pageSize) {
        return ResponseEntity.ok(service.getOrderDetails(orderId, pageIndex, pageSize));
    }
}
