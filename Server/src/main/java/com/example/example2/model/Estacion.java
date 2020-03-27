package com.example.example2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Estacion {

    @Id
    @GeneratedValue
    private Long idEstacion;

    private String nombre;

    /**
     * @return the id
     */
    public Long getId() {
        return idEstacion;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.idEstacion = id;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}