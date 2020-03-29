package com.example.example2.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Ruta {

    @Id
    @GeneratedValue
    private Long id_ruta;

    private String name;

    @ManyToMany(mappedBy = "rutas")
    @JsonIgnore
    private Set<Estacion> estaciones = new HashSet<Estacion>();

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

    public Set<Estacion> getEstaciones() {
        return estaciones;
    }

    public void setEstaciones(Set<Estacion> estaciones) {
        this.estaciones = estaciones;
    }

    public void addEstacion(Estacion pEstacion) {
        this.estaciones.add(pEstacion);
    }
}