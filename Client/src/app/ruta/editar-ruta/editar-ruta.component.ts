import { Component, OnInit } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../shared/ruta.service';
import { switchMap } from 'rxjs/operators';
import { Estacion } from '../shared/estacion';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit {

  ruta: Ruta = null;
  est: Estacion[] = [];
  user = environment.user;
  rol = environment.rol;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.findById(+params.get('id')))
    )
    .subscribe(result => {
      this.ruta = result;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.getEstaciones(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.est = result;
    });
  }

  edit() {
    this.ruta.estaciones = this.est;
    this.rutaService.update(this.ruta).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/informacionRuta/${this.ruta.id}`]);
      },
      error => {
        console.error(error);
      }
    );

  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }

}
