package com.example.example2.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ConductorBusId implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Column(name = "id_conductor")
    private Long id_conductor;

    @Column(name="id_bus")
    private Long id_bus;

    public Long getIdConductor(){
        return id_conductor;
    }

    public void setIdConductor(Long id){
        this.id_conductor = id;
    }

    public Long getIdBus(){
        return id_bus;
    }

    public void setIdBus(Long id){
        this.id_bus = id;
    }
}