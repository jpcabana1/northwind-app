package com.api.springboot.Services;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.springboot.Contracts.Repositories.IOrdersRepository;
import com.api.springboot.Contracts.Services.IOrdersService;
import com.api.springboot.Models.OrderCustomerDTO;
import com.api.springboot.Models.OrderDetailsDTO;

@Service
public class OrdersService implements IOrdersService {

    @Autowired
    private IOrdersRepository repository;

    @Override
    public Collection<OrderCustomerDTO> getOrdersByCustomer(String customerId, Integer pageIndex, Integer pageSize) {
        return Optional
                .ofNullable(repository.getOrdersByCustomer(customerId, pageIndex, pageSize))
                .orElse(Collections.<OrderCustomerDTO>emptyList());
    }

    @Override
    public Collection<OrderDetailsDTO> getOrderDetails(Integer orderId, Integer pageIndex, Integer pageSize) {
        return Optional
                .ofNullable(repository.getOrderDetails(orderId, pageIndex, pageSize))
                .orElse(Collections.<OrderDetailsDTO>emptyList());
    }

}
