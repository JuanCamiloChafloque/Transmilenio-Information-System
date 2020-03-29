package com.example.example2.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class ConductorXBus {

    @EmbeddedId
    private ConductorBusId id;

    @Column(name="dia_asignacion")
    private String diaAsignacion;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("id_conductor")
    private Conductor id_conductor;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("id_bus")
    private Bus id_bus;

    public String getDiaAsignacion() {
        return diaAsignacion;
    }

    public void setDiaAsignacion(String diaAsignacion) {
        this.diaAsignacion = diaAsignacion;
    }

    public Conductor getConductorId() {
        return id_conductor;
    }

    public void setConductorId(Conductor conductorId) {
        this.id_conductor = conductorId;
    }

    public Bus getBusId() {
        return id_bus;
    }

    public void setBusId(Bus busId) {
        this.id_bus = busId;
    }
    
}