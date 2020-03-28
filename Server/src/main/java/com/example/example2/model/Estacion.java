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
public class Estacion {

    @Id
    @GeneratedValue
    private Long idEstacion;

    private String nombre;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JsonIgnore
    private Set<Ruta> rutas;

    public Long getId() {
        return idEstacion;
    }

    public void setId(Long id) {
        this.idEstacion = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<Ruta> getRutas() {
        return rutas;
    }

    public void setRutas(Set<Ruta> rutas) {
        this.rutas = rutas;
    }
}