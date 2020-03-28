package com.example.example2.service;

import com.example.example2.model.Estacion;
import com.example.example2.model.Ruta;
import com.example.example2.model.RutaRepository;

import com.example.example2.exceptions.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class RutaService {

    @Autowired
    private RutaRepository repository;

    @GetMapping("/paginaPrincipalRutas")
    public Iterable<Ruta> getRutas() {
        return repository.findAll();
    }

    @GetMapping("/informacionRuta/{id}")
    public Ruta buscarRuta(@PathVariable("id") Long rutaId) {
        return repository.findById(rutaId).orElseThrow(() -> new NotFoundException("Ruta no encontrada"));
    }

    @GetMapping("/informacionRuta/{id}/estaciones")
    public Iterable<Estacion> getEstaciones(@PathVariable("id") Long rutaId){
        return repository.findById(rutaId).get().getEstaciones();
    }

    @PostMapping("/crearRuta")
    public Ruta crearRuta(@RequestBody Ruta ruta) {
        return repository.save(ruta);
    }

    @PutMapping("/editarRuta/{id}")
    public Ruta editarRuta(@PathVariable("id") Long rutaId, @RequestBody Ruta rutaData) {
        Ruta rutaEncontrada = buscarRuta(rutaId);
        rutaEncontrada.setId(rutaData.getId());
        rutaEncontrada.setEstaciones(rutaData.getEstaciones());

        return repository.save(rutaEncontrada);
    }

    @DeleteMapping("/paginaPrincipalRutas/{id}")
    public void eliminarRuta(@PathVariable("id") Long rutaId) {
        if(repository.existsById(rutaId)) {
            repository.deleteById(rutaId);
        } else {
            throw new NotFoundException();
        }
    }
    
}