package com.example.example2.model;

public class Horario {

    private String diaAsignacion;
    private String horaInicio;
    private String horaFin;

    public String getDiaAsignacion() {
        return diaAsignacion;
    }

    public String getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(String horaFin) {
        this.horaFin = horaFin;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public void setDiaAsignacion(String diaAsignacion) {
        this.diaAsignacion = diaAsignacion;
    }

}