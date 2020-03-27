import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  message = '';

  constructor(
    private router: Router,
    private logSesion: LoginService
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion( ) {
    if (this.username === '' || this.password === '') {
      this.message = 'Todos los campos son obligatorios!';
    } else {
      this.logSesion.login(this.username, this.password).subscribe(data => {
        this.message = 'Bienvenido!';
        this.router.navigate(['/paginaPrincipalLogin']);
      }, error => {
        this.message = 'Usuario o contraseña incorrecta!';
      });
    }
  }

}
