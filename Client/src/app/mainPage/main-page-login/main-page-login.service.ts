import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainPageLoginService {

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

  getUsuarios() {
    const url = `http://localhost:8080/listaUsuarios`;
    return this.get<Usuario[]>(url);
  }

  getMenuPrincipalConductores( ) {
    return this.http.get('http://localhost:8080/paginaPrincipalConductores', {
      withCredentials: true
    });
  }

  getMenuPrincipalBuses( ) {
    return this.http.get('http://localhost:8080/paginaPrincipalBuses', {
      withCredentials: true
    });
  }

  logout( ) {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }

}
