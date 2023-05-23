package com.api.springboot.Repositories;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.api.springboot.Contracts.Repositories.IOrdersRepository;
import com.api.springboot.Models.OrderCustomerDTO;
import com.api.springboot.Models.OrderDetailsDTO;
import com.api.springboot.Queries.OrdersQuery;

@Repository
public class OrdersRepository implements IOrdersRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public Collection<OrderCustomerDTO> getOrdersByCustomer(String customerId, Integer pageIndex, Integer pageSize) {

        var sql = OrdersQuery.GetOrdersByCustomerId;

        var parameters = new MapSqlParameterSource()
                .addValue("customerId", customerId)
                .addValue("pageIndex", pageIndex * pageSize)
                .addValue("pageSize", pageSize);

        return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(OrderCustomerDTO.class));
    }

    @Override
    public Collection<OrderDetailsDTO> getOrderDetails(Integer orderId, Integer pageIndex, Integer pageSize) {
        var sql = OrdersQuery.GetOrderDetailsByOrderId;

        var parameters = new MapSqlParameterSource()
                .addValue("orderId", orderId)
                .addValue("pageIndex", pageIndex * pageSize)
                .addValue("pageSize", pageSize);

        return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(OrderDetailsDTO.class));
    }

}