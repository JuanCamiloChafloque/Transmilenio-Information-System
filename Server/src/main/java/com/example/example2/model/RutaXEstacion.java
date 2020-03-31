package com.example.example2.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class RutaXEstacion {

    @EmbeddedId
    private RutaEstacionId id;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("id_estacion")
    private Estacion id_estacion;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("id_ruta")
    private Ruta id_ruta;
  
    public Ruta getRutaId() {
        return id_ruta;
    }

    public void setRutaId(Ruta rutaId) {
        this.id_ruta = rutaId;
    }
    
    public Estacion getEstacionId() {
        return id_estacion;
    }

    public void setEstacionId(Estacion estacionId) {
        this.id_estacion = estacionId;
    }

    public void setEmbId(RutaEstacionId id){
        this.id = id;
    }
    
}