package com.api.springboot.Services;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import com.api.springboot.Models.OrdersDTO;
import com.api.springboot.Repositories.Queries.OrdersQuery;
import com.api.springboot.Services.Interfaces.IOrdersService;

@Service
public class OrdersService implements IOrdersService {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public Collection<OrdersDTO> GetOrdersByCustomer(String CustomerId) {
        var sql = OrdersQuery.GetOrdersByCustomerId;
        var parameters = new MapSqlParameterSource();
        parameters.addValue("CustomerId", CustomerId);
        var result = jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(OrdersDTO.class));
        return Optional.ofNullable(result).orElse(Collections.<OrdersDTO>emptyList());
    }
}
