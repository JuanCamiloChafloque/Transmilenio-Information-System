package com.example.example2.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class BusXRuta {

    @EmbeddedId
    private BusRutaId id;

    @Column(name="dia_asignacion")
    private String diaAsignacion;

    @Column(name="hora_inicio")
    private String horaInicio;

    @Column(name="hora_fin")
    private String horaFin;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("id_bus")
    private Bus id_bus;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("id_ruta")
    private Ruta id_ruta;

    public String getDiaAsignacion() {
        return diaAsignacion;
    }

    public void setDiaAsignacion(String diaAsignacion) {
        this.diaAsignacion = diaAsignacion;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(String horaFin) {
        this.horaFin = horaFin;
    }

    public Ruta getRutaId() {
        return id_ruta;
    }

    public void setRutaId(Ruta rutaId) {
        this.id_ruta = rutaId;
    }
    
    public Bus getBusId() {
        return id_bus;
    }

    public void setBusId(Bus busId) {
        this.id_bus = busId;
    }
    
}