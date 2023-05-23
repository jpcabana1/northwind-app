package com.api.springboot.Contracts.Repositories;

import java.util.Collection;

import com.api.springboot.Models.HomeResultDTO;

public interface IHomeRepository {
    Collection<HomeResultDTO> getCustomerOrders(Integer pageIndex, Integer pageSize);
}
