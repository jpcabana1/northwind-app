package com.api.springboot.Services;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.springboot.Contracts.Repositories.IHomeRepository;
import com.api.springboot.Contracts.Services.IHomeService;
import com.api.springboot.Models.HomeResultDTO;

@Service
public class HomeService implements IHomeService {

    @Autowired
    private IHomeRepository repository;

    @Override
    public Collection<HomeResultDTO> getCustomerOrders(Integer pageIndex, Integer pageSize) {
        return Optional
                .ofNullable(repository.getCustomerOrders(pageIndex, pageSize))
                .orElse(Collections.<HomeResultDTO>emptyList());
    }

}
