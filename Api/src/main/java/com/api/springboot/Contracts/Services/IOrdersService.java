package com.api.springboot.Contracts.Services;

import java.util.Collection;

import com.api.springboot.Models.OrderCustomerDTO;
import com.api.springboot.Models.OrderDetailsDTO;

public interface IOrdersService {
    Collection<OrderCustomerDTO> getOrdersByCustomer(String customerId, Integer pageIndex, Integer pageSize);
    Collection<OrderDetailsDTO> getOrderDetails(Integer orderId, Integer pageIndex, Integer pageSize);
}
