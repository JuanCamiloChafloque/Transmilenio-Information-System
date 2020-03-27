package com.example.example2.model;

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
    private Long idBus;

    private String modelo;
    private String placa;

    @OneToMany(mappedBy = "busId", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ConductorXBus> conductores;

    public Long getId() {
        return idBus;
    }

    public void setId(Long id) {
        this.idBus = id;
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

    public void setConductores(List<ConductorXBus> conductorxbusList) {
        this.conductores = conductorxbusList;
    }
}