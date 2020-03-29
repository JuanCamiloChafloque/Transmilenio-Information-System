import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageLoginService } from './main-page-login.service';
import { Usuario } from './usuario';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main-page-login',
  templateUrl: './main-page-login.component.html',
  styleUrls: ['./main-page-login.component.css']
})
export class MainPageLoginComponent implements OnInit {

  message = '';
  usuarioLogin = environment.user;
  usuarios: Usuario[] = [];
  messageAuth = '';

  constructor(
    private router: Router,
    private logSesion: MainPageLoginService
  ) { }

  ngOnInit(): void {

    this.logSesion.getUsuarios().subscribe(
      results => {
        this.usuarios = results;
        console.log(results);
        for (const user of this.usuarios) {
          if (user.name === environment.user) {
            environment.rol = user.rol;
          }
        }
      }
    );
  }

  menuConductores( ) {
    if (environment.user !== undefined && environment.rol === 'COORDINADOR') {
      this.router.navigate(['/paginaPrincipalConductores']);
    } else {
      this.message = 'Error 403. No posee los permisos para entrar al menú de conductores';
    }

  }

  menuBuses( ) {
    if (environment.user !== undefined && environment.rol === 'COORDINADOR') {
      this.router.navigate(['/paginaPrincipalBuses']);
    } else {
      this.message = 'Error 403 No posee los permisos para entrar al menú de buses';
    }
  }

  menuRutas( ) {
    if (environment.user !== undefined && (environment.rol === 'ADMIN' || environment.rol === 'PASAJERO')) {
      this.router.navigate(['/paginaPrincipalRutas']);
    } else {
      this.message = 'Error 403 No posee los permisos para entrar al menú de rutas';
    }
  }

  logout( ) {
    environment.rol = undefined;
    environment.user = undefined;
    this.logSesion.logout().subscribe(data => {
      console.log('Logout exitoso!');
      this.router.navigate(['/login']);
    }, error => {
      console.log('Error in logout!');
    });
  }

}
