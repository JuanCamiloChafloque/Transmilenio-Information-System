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
public class Estacion {

    @Id
    @GeneratedValue
    private Long id_estacion;

    private String nombre;

    @OneToMany(mappedBy = "id_estacion" , cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, orphanRemoval = true)
    @JsonIgnore
    private List<RutaXEstacion> rutas = new ArrayList<RutaXEstacion>();

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

    public List<RutaXEstacion> getRutas() {
        return rutas;
    }

    public void setRutas(List<RutaXEstacion> rutas) {
        this.rutas = rutas;
    }
}