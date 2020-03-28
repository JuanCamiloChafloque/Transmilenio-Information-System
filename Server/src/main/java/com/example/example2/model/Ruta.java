package com.example.example2.model;

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
    private Long idRuta;

    private String name;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JsonIgnore
    private Set<Estacion> estaciones;

    public Long getId() {
        return idRuta;
    }

    public void setId(Long id) {
        this.idRuta = id;
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
}