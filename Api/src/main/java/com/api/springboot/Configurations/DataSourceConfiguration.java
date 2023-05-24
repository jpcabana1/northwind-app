package com.api.springboot.Configurations;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfiguration {

    @Value("${SPRING_DATASOURCE_URL:${spring.datasource.url}}")
    private String url;

    @Value("${SPRING_DATASOURCE_USERNAME:${spring.datasource.username}}")

    private String username;
    @Value("${SPRING_DATASOURCE_PASSWORD:${spring.datasource.password}}")
    private String password;

    @Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
                .driverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver")
                .url(url)
                .username(username)
                .password(password)
                .build();
    }
}