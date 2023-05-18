package com.api.springboot.Services.Interfaces;

import java.util.Collection;

import com.api.springboot.Models.OrdersDTO;

public interface IOrdersService {
    Collection<OrdersDTO> GetOrdersByCustomer(String CustomerId);
}
