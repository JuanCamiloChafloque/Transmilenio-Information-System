package com.example.example2.service;

import com.example.example2.model.BusXRuta;
import com.example.example2.model.BusXRutaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class BusXRutaService {

    @Autowired
    private BusXRutaRepository repository;

    @GetMapping("/listaBusesRutas")
    public Iterable<BusXRuta> getBusesRutas() {
        return repository.findAll();
    }
    
}