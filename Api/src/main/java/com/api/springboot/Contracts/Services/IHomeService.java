package com.api.springboot.Contracts.Services;

import java.util.Collection;

import com.api.springboot.Models.HomeResultDTO;

public interface IHomeService {
    Collection<HomeResultDTO> getCustomerOrders(Integer pageIndex, Integer pageSize);
}
