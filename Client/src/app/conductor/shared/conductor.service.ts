import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conductor } from './conductor';
import { environment } from '../../../environments/environment';
import { Bus } from 'src/app/bus/shared/Bus';
import { Conductorxbus } from './conductorxbus';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }

  private get<T>(url): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data).pipe(
      catchError(this.handleError)
    );
  }

  private delete<T>(url): Observable<T> {
    console.log('delete:', url);
    return this.http.delete<T>(url, {withCredentials: true} ).pipe(
      catchError(this.handleError)
    );
  }

  getBusesConductor(id: number) {
    const url = `http://localhost:8080/informacionConductor/${id}/buses`;
    return this.get<Bus[]>(url);
  }

  getBusesxconductor(id: number) {
    const url = `http://localhost:8080/informacionConductor/${id}/busesxconductor`;
    return this.get<Conductorxbus[]>(url);
  }

  findAll() {
    const url = 'http://localhost:8080/paginaPrincipalConductores';
    return this.get<Conductor[]>(url);
  }

  findById(id: number) {
    const url = `http://localhost:8080/informacionConductor/${id}`;
    return this.get<Conductor>(url);
  }

  remove(id: number) {
    const url = `http://localhost:8080/paginaPrincipalConductores/${id}`;
    return this.delete<Conductor>(url);
  }

  create(conductor: Conductor) {
    const url = `http://localhost:8080/crearConductor`;
    return this.post(url, {
      name: conductor.name,
      cedula: conductor.cedula,
      telefono: conductor.telefono,
      direccion: conductor.direccion
    });
  }

  update(conductor: Conductor) {
    const url = `http://localhost:8080/editarConductor/${conductor.id}`;
    return this.put(url, {
      name: conductor.name,
      cedula: conductor.cedula,
      telefono: conductor.telefono,
      direccion: conductor.direccion
    });
  }

  agregarBus(idCond: number, idBus: number, diaAsig: string, horaIni: string, horaF: string) {
    const url = `http://localhost:8080/agregarBus/${idCond}/${idBus}`;
    return this.put(url, {
      diaAsignacion: diaAsig,
      horaInicio: horaIni,
      horaFin: horaF
    });
  }

}
