import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ruta } from './Ruta';
import { environment } from '../../../environments/environment';
import { Estacion } from './estacion';
import { Busxruta } from 'src/app/bus/shared/busxruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

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

  getBusesRuta(id: number) {
    const url = `http://localhost:8080/informacionRuta/${id}/buses`;
    return this.get<Busxruta[]>(url);

  }

  findAll() {
    const url = 'http://localhost:8080/paginaPrincipalRutas';
    return this.get<Ruta[]>(url);
  }

  getAllEstaciones() {
    const url = `http://localhost:8080/listaEstaciones`;
    return this.get<Estacion[]>(url);
  }

  getEstacionById(id: number) {
    const url = `http://localhost:8080/informacionEstacion/${id}`;
    return this.get<Estacion>(url);
  }

  getEstaciones(id: number) {
    const url = `http://localhost:8080/informacionRuta/${id}/estaciones`;
    return this.get<Estacion[]>(url);
  }

  findById(id: number) {
    const url = `http://localhost:8080/informacionRuta/${id}`;
    return this.get<Ruta>(url);
  }

  remove(id: number) {
    const url = `http://localhost:8080/paginaPrincipalRutas/${id}`;
    return this.delete<Ruta>(url);
  }

  update(ruta: Ruta) {
    const url = `http://localhost:8080/editarRuta/${ruta.id}`;
    return this.put(url, {
      name: ruta.name,
    });
  }

  create(ruta: Ruta) {
    const url = `http://localhost:8080/crearRuta`;
    return this.post(url, {
      name: ruta.name
    });
  }
}
