package com.api.springboot.Controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.springboot.Contracts.Services.IHomeService;
import com.api.springboot.Models.HomeResultDTO;

@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private IHomeService service;

    @GetMapping()
    public ResponseEntity<Collection<HomeResultDTO>> loadHome(@RequestParam Integer pageIndex, @RequestParam Integer pageSize) {
        return ResponseEntity.ok(service.getCustomerOrders(pageIndex, pageSize));
    }
}