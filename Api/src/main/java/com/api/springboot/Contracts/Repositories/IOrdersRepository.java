package com.api.springboot.Contracts.Repositories;

import java.util.Collection;

import com.api.springboot.Models.OrderCustomerDTO;
import com.api.springboot.Models.OrderDetailsDTO;

public interface IOrdersRepository {
    Collection<OrderCustomerDTO> getOrdersByCustomer(String customerId);
    Collection<OrderDetailsDTO> getOrderDetails(Integer orderId);
}