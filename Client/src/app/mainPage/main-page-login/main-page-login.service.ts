import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainPageLoginService {

  constructor(private http: HttpClient) { }

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
