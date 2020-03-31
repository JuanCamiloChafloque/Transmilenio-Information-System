package com.example.example2.service;

import com.example.example2.model.Bus;
import com.example.example2.model.BusRepository;
import com.example.example2.model.BusRutaId;
import com.example.example2.model.BusXRuta;
import com.example.example2.model.Conductor;
import com.example.example2.model.ConductorXBus;
import com.example.example2.model.HorarioRuta;
import com.example.example2.model.Ruta;
import com.example.example2.model.RutaRepository;

import java.util.ArrayList;
import java.util.List;

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

    @Autowired
    private RutaRepository rutaRepository;

    @GetMapping("/paginaPrincipalBuses")
    public Iterable<Bus> getBuses() {
        return repository.findAll();
    }

    @GetMapping("/informacionBus/{id}")
    public Bus buscarBus(@PathVariable("id") Long busId) {
        return repository.findById(busId).orElseThrow(() -> new NotFoundException("Bus no encontrado"));
    }

    @GetMapping("/informacionBus/{id}/conductores")
    public Iterable<Conductor> getBuses(@PathVariable("id") Long busId) {
        List<Conductor> conductores = new ArrayList<Conductor>();
        Iterable<ConductorXBus> condBus = repository.findById(busId).get().getConductores();
        for(ConductorXBus actual: condBus){
            if(actual.getBusId().getId() == busId){
                conductores.add(actual.getConductorId());
            }
        }
        return conductores;
    }

    @GetMapping("/informacionBus/{id}/rutas")
    public Iterable<Ruta> getRutas(@PathVariable("id") Long busId) {
        List<Ruta> rutas = new ArrayList<Ruta>();
        Iterable<BusXRuta> busesRuta = repository.findById(busId).get().getRutas();
        for(BusXRuta actual: busesRuta){
            if(actual.getBusId().getId() == busId){
                rutas.add(actual.getRutaId());
            }
        }
        return rutas;
    }

    @GetMapping("/informacionBus/{id}/rutasxbus")
    public Iterable<BusXRuta> getRutasxbus(@PathVariable("id") Long busId) {
        return repository.findById(busId).get().getRutas();
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

    @PutMapping("/agregarRuta/{idB}/{idR}")
    public Bus agregarRuta(@PathVariable("idB") Long idBus, @PathVariable("idR") Long idRuta, @RequestBody HorarioRuta horario){        
        Bus busEncontrado = repository.findById(idBus).get();
        Ruta rutaEncontrada = rutaRepository.findById(idRuta).get();
        
        BusXRuta nuevo = new BusXRuta();
        BusRutaId id = new BusRutaId();
        id.setIdBus(idBus);
        id.setIdRuta(idRuta);
        nuevo.setEmbId(id);
        nuevo.setBusId(busEncontrado);
        nuevo.setRutaId(rutaEncontrada);
        nuevo.setDiaAsignacion(horario.getDiaAsignacion());
        nuevo.setHoraInicio(horario.getHoraInicio());
        nuevo.setHoraFin(horario.getHoraFin());
        
        busEncontrado.getRutas().add(nuevo);

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