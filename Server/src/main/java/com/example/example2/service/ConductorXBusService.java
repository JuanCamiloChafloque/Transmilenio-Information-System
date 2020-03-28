package com.example.example2.service;

import com.example.example2.model.ConductorXBus;
import com.example.example2.model.ConductorXBusRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class ConductorXBusService {

    @Autowired
    private ConductorXBusRepository repository;

    @GetMapping("/listaConductoresBuses")
    public Iterable<ConductorXBus> getConductoresBuses() {
        return repository.findAll();
    }
    
}