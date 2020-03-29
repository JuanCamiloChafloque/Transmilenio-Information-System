package com.example.example2.service;

import com.example.example2.model.Estacion;
import com.example.example2.model.EstacionRepository;

import com.example.example2.exceptions.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class EstacionService {

    @Autowired
    private EstacionRepository repository;

    @GetMapping("/listaEstaciones")
    public Iterable<Estacion> getEstaciones() {
        return repository.findAll();
    }

    @GetMapping("/informacionEstacion/{id}")
    public Estacion buscarEstacion(@PathVariable("id") Long estacionId) {
        return repository.findById(estacionId).orElseThrow(() -> new NotFoundException("Estación no encontrada"));
    }
    
}