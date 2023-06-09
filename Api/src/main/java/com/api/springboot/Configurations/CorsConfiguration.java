package com.api.springboot.Configurations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {
    
    @Value("${NORTHWIND_CORS_APP_URL:${northwind.cors.app-url}}")
    private String appUrl;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
                .addMapping("/**")
                .allowedOrigins(appUrl);
			}
		};
	}
}
