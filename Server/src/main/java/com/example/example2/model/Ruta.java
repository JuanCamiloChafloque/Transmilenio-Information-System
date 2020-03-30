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
public class Ruta {

    @Id
    @GeneratedValue
    private Long id_ruta;

    private String name;

    @OneToMany(mappedBy = "id_ruta", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<RutaXEstacion> estaciones = new ArrayList<RutaXEstacion>();

    @OneToMany(mappedBy = "id_ruta", cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<BusXRuta> buses = new ArrayList<BusXRuta>();

    public Long getId() {
        return id_ruta;
    }

    public void setId(Long id) {
        this.id_ruta = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RutaXEstacion> getEstaciones() {
        return estaciones;
    }

    public void setEstaciones(List<RutaXEstacion> estaciones) {
        this.estaciones = estaciones;
    }

    public void addEstacion(RutaXEstacion pEstacion) {
        this.estaciones.add(pEstacion);
    }

    public List<BusXRuta> getBuses() {
        return buses;
    }

    public void setBuses(List<BusXRuta> buses) {
        this.buses = buses;
    }
}