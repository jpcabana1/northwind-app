package com.api.springboot.Repositories;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.api.springboot.Contracts.Repositories.IHomeRepository;
import com.api.springboot.Models.HomeResultDTO;
import com.api.springboot.Queries.CustomerQuery;

@Repository
public class HomeRepository implements IHomeRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public Collection<HomeResultDTO> getCustomerOrders(Integer pageIndex, Integer pageSize) {

        var sql = CustomerQuery.GetCustomerByIdPaginated;

        var parameters = new MapSqlParameterSource()
                .addValue("pageIndex", pageIndex * pageSize)
                .addValue("pageSize", pageSize);

        return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(HomeResultDTO.class));
    }

}
