import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bus } from './Bus';
import { environment } from '../../../environments/environment';
import { Busxruta } from './busxruta';
import { Conductor } from 'src/app/conductor/shared/conductor';
import { Ruta } from 'src/app/ruta/shared/ruta';

@Injectable({
  providedIn: 'root'
})
export class BusService {

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

  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data).pipe(
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

  private delete<T>(url): Observable<T> {
    console.log('delete:', url);
    return this.http.delete<T>(url, {withCredentials: true} ).pipe(
      catchError(this.handleError)
    );
  }

  getConductoresBus(id: number) {
    const url = `http://localhost:8080/informacionBus/${id}/conductores`;
    return this.get<Conductor[]>(url);
  }

  getRutasBus(id: number) {
    const url = `http://localhost:8080/informacionBus/${id}/rutas`;
    return this.get<Ruta[]>(url);
  }

  getRutasXBus(id: number) {
    const url = `http://localhost:8080/informacionBus/${id}/rutasxbus`;
    return this.get<Busxruta[]>(url);
  }

  findAll() {
    const url = 'http://localhost:8080/paginaPrincipalBuses';
    return this.get<Bus[]>(url);
  }

  findById(id: number) {
    const url = `http://localhost:8080/informacionBus/${id}`;
    return this.get<Bus>(url);
  }

  remove(id: number) {
    const url = `http://localhost:8080/paginaPrincipalBuses/${id}`;
    return this.delete<Bus>(url);
  }

  update(bus: Bus) {
    const url = `http://localhost:8080/editarBus/${bus.id}`;
    return this.put(url, {
      modelo: bus.modelo,
      placa: bus.placa
    });
  }

  agregarRuta(idBus: number, idRuta: number, diaAsig: string, horaIni: string, horaF: string) {
    const url = `http://localhost:8080/agregarRuta/${idBus}/${idRuta}`;
    return this.put(url,{
      diaAsignacion: diaAsig,
      horaInicio: horaIni,
      horaFin: horaF
    });
  }

  create(bus: Bus) {
    const url = `http://localhost:8080/crearBus`;
    return this.post(url, {
      modelo: bus.modelo,
      placa: bus.placa,
    });
  }
}
