package com.example.example2.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Estacion {

    @Id
    @GeneratedValue
    private Long id_estacion;

    private String nombre;

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Ruta> rutas = new HashSet<Ruta>();

    public Long getId() {
        return id_estacion;
    }

    public void setId(Long id) {
        this.id_estacion = id;
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