import { Component, OnInit } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../shared/ruta.service';
import { switchMap } from 'rxjs/operators';
import { Estacion } from '../shared/estacion';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ver-ruta',
  templateUrl: './ver-ruta.component.html',
  styleUrls: ['./ver-ruta.component.css']
})
export class VerRutaComponent implements OnInit {

  ruta: Ruta = null;
  estaciones: Estacion[] = [];
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
      console.log(result);
      this.ruta = result;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.getEstaciones(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.estaciones = result;
    });
  }

  eliminarRuta(id: number) {
    this.rutaService.remove(id).subscribe(
      resultado => console.log('Ruta eliminado!')
    );

  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }





}
