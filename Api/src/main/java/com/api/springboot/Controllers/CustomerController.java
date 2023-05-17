package com.api.springboot.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @GetMapping("get-all")
    public ResponseEntity<String> getAll() {
       return ResponseEntity.ok( "Hello World");
    }
    
}