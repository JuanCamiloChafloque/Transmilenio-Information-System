package com.example.example2.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Bus {

    @Id
    @GeneratedValue
    private Long id_bus;

    private String modelo;
    private String placa;

    @OneToMany(mappedBy = "id_bus", cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<ConductorXBus> conductores = new ArrayList<ConductorXBus>();

    @OneToMany(mappedBy = "id_bus", cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<BusXRuta> rutas = new ArrayList<BusXRuta>();

    public Long getId() {
        return id_bus;
    }

    public void setId(Long id) {
        this.id_bus = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public List<ConductorXBus> getConductores() {
        return conductores;
    }

    public void setConductores(List<ConductorXBus> conductores) {
        this.conductores = conductores;
    }

    public List<BusXRuta> getRutas() {
        return rutas;
    }

    public void setRutas(List<BusXRuta> rutas) {
        this.rutas = rutas;
    }

    
}