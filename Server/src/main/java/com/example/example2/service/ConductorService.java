package com.example.example2.service;

import com.example.example2.model.Bus;
import com.example.example2.model.BusRepository;
import com.example.example2.model.Conductor;
import com.example.example2.model.ConductorBusId;
import com.example.example2.model.ConductorRepository;
import com.example.example2.model.ConductorXBus;

import java.util.ArrayList;
import java.util.List;

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
public class ConductorService {

    @Autowired
    private ConductorRepository repository;
    @Autowired
    private BusRepository busRepository;

    @GetMapping("/paginaPrincipalConductores")
    public Iterable<Conductor> getConductores() {
        return repository.findAll();
    }

    @GetMapping("/informacionConductor/{id}")
    public Conductor buscarConductor(@PathVariable("id") Long conductorId) {
        return repository.findById(conductorId).orElseThrow(() -> new NotFoundException("Conductor no encontrado"));
    }

    @GetMapping("/informacionConductor/{id}/buses")
    public Iterable<Bus> getBuses(@PathVariable("id") Long conductorId) {
        List<Bus> buses = new ArrayList<Bus>();
        Iterable<ConductorXBus> condBuses = repository.findById(conductorId).get().getBuses();
        for(ConductorXBus actual: condBuses){
            if(actual.getConductorId().getId() == conductorId){
                buses.add(actual.getBusId());
            }
        }
        return buses;
    }

    @GetMapping("/informacionConductor/{id}/busesxconductor")
    public Iterable<ConductorXBus> getBusesXConductor(@PathVariable("id") Long conductorId) {
        return repository.findById(conductorId).get().getBuses();
    }

    @PostMapping("/crearConductor")
    public Conductor crearConductor(@RequestBody Conductor conductor) {
        return repository.save(conductor);
    }

    @PutMapping("/editarConductor/{id}")
    public Conductor editarConductor(@PathVariable("id") Long conductorId, @RequestBody Conductor conductorData) {
        Conductor conductorEncontrado = buscarConductor(conductorId);
        conductorEncontrado.setName(conductorData.getName());
        conductorEncontrado.setCedula(conductorData.getCedula());
        conductorEncontrado.setTelefono(conductorData.getTelefono());
        conductorEncontrado.setDireccion(conductorData.getDireccion());

        return repository.save(conductorEncontrado);
    }

    @PutMapping("/agregarBus/{idC}/{idB}")
    public Conductor agregarBus(@PathVariable("idC") Long idCond, @PathVariable("idB") Long idBus, @RequestBody String dia){        
        Conductor condEncontrado = repository.findById(idCond).get();
        Bus busEncontrado = busRepository.findById(idBus).get();
        
        ConductorXBus nuevo = new ConductorXBus();
        ConductorBusId id = new ConductorBusId();
        id.setIdBus(idBus);
        id.setIdConductor(idCond);
        nuevo.setEmbId(id);
        nuevo.setBusId(busEncontrado);
        nuevo.setConductorId(condEncontrado);
        nuevo.setDiaAsignacion(dia);
        condEncontrado.getBuses().add(nuevo);

        return repository.save(condEncontrado);
    }

    

    @DeleteMapping("/paginaPrincipalConductores/{id}")
    public void eliminarConductor(@PathVariable("id") Long conductorId) {
        if(repository.existsById(conductorId)) {
            repository.deleteById(conductorId);
        } else {
            throw new NotFoundException();
        }
    }
    
}