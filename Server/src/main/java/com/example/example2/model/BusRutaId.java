package com.example.example2.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BusRutaId implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Column(name = "id_bus")
    private Long id_bus;

    @Column(name="id_ruta")
    private Long id_ruta;

    public Long getIdBus(){
        return id_bus;
    }

    public void setIdBus(Long id){
        this.id_bus = id;
    }

    public Long getIdRuta(){
        return id_ruta;
    }

    public void setIdRuta(Long id){
        this.id_ruta = id;
    }
}