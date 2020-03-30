package com.example.example2.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class RutaEstacionId implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Column(name = "id_ruta")
    private Long id_ruta;

    @Column(name="id_estacion")
    private Long id_estacion;

    public Long getIdEstacion(){
        return id_estacion;
    }

    public void setIdEstacion(Long id){
        this.id_estacion = id;
    }

    public Long getIdRuta(){
        return id_ruta;
    }

    public void setIdRuta(Long id){
        this.id_ruta = id;
    }
}