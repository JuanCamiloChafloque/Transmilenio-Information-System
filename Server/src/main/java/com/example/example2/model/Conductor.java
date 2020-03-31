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
public class Conductor {

    @Id
    @GeneratedValue
    private Long id_conductor;

    private String name;
    private String cedula;
    private String telefono;
    private String direccion;

    @OneToMany(mappedBy = "id_conductor", cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<ConductorXBus> buses = new ArrayList<ConductorXBus>();

    public Long getId() {
        return id_conductor;
    }

    public void setId(Long id) {
        this.id_conductor = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public List<ConductorXBus> getBuses() {
        return buses;
    }

    public void setBuses(List<ConductorXBus> buses) {
        this.buses = buses;
    }

    public void addBus(ConductorXBus bus) {
        this.buses.add(bus);
    }
}