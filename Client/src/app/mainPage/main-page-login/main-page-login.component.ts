import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageLoginService } from './main-page-login.service';

@Component({
  selector: 'app-main-page-login',
  templateUrl: './main-page-login.component.html',
  styleUrls: ['./main-page-login.component.css']
})
export class MainPageLoginComponent implements OnInit {

  message = '';

  constructor(
    private router: Router,
    private logSesion: MainPageLoginService
  ) { }

  ngOnInit(): void {
  }

  menuConductores( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
    /*this.logSesion.getMenuPrincipalConductores().subscribe(data => {
      console.log('Se entró al menu principal de los conductores!');
    }, error => {
      this.message = 'Error entrando al menu principal de los conductores. \n No posee los credenciales!';
    });*/
  }

  menuBuses( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
    /*this.logSesion.getMenuPrincipalBuses().subscribe(data => {
      console.log('Se entró al menu principal de los buses!');
    }, error => {
      this.message = 'Error entrando al menu principal de los buses. \n No posee los credenciales!';
    });*/
  }

  menuRutas( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }

  logout( ) {
      this.logSesion.logout().subscribe(data => {
        console.log('Logout exitoso!');
        this.router.navigate(['/login']);
      }, error => {
        console.log('Error in logout!');
      });
  }

}
