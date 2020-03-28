package com.example.example2.service;

import com.example.example2.model.Bus;
import com.example.example2.model.BusRepository;
import com.example.example2.exceptions.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class BusService {

    @Autowired
    private BusRepository repository;

    @GetMapping("/paginaPrincipalBuses")
    public Iterable<Bus> getBuses() {
        return repository.findAll();
    }

    @GetMapping("/informacionBus/{id}")
    public Bus buscarBus(@PathVariable("id") Long busId) {
        return repository.findById(busId).orElseThrow(() -> new NotFoundException("Bus no encontrado"));
    }

    @PostMapping("/crearBus")
    public Bus crearBus(@RequestBody Bus bus) {
        return repository.save(bus);
    }

    @PutMapping("/editarBus/{id}")
    public Bus editarBus(@PathVariable("id") Long busId, @RequestBody Bus busData) {
        Bus busEncontrado = buscarBus(busId);
        busEncontrado.setModelo(busData.getModelo());
        busEncontrado.setPlaca(busData.getPlaca());

        return repository.save(busEncontrado);
    }

    @DeleteMapping("/paginaPrincipalBuses/{id}")
    public void eliminarBus(@PathVariable("id") Long busId) {
        if(repository.existsById(busId)) {
            repository.deleteById(busId);
        } else {
            throw new NotFoundException();
        }
    }
    
}