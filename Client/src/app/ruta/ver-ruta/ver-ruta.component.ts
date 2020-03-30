import { Component, OnInit } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../shared/ruta.service';
import { switchMap } from 'rxjs/operators';
import { Estacion } from '../shared/estacion';
import { environment } from '../../../environments/environment';
import { Busxruta } from '../../bus/shared/busxruta';

@Component({
  selector: 'app-ver-ruta',
  templateUrl: './ver-ruta.component.html',
  styleUrls: ['./ver-ruta.component.css']
})
export class VerRutaComponent implements OnInit {

  ruta: Ruta = null;
  estaciones: Estacion[] = [];
  errorMessage = '';
  user = environment.user;
  rol = environment.rol;
  buses: Busxruta[] = [];

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

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.getBusesRuta(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.buses = result;
    });
  }

  eliminarRuta(id: number) {
    if (this.buses.length === 0) {
      this.rutaService.remove(id).subscribe(
        resultado => console.log('Ruta eliminada!')
      );
      this.router.navigate(['/paginaPrincipalRutas']);
    } else {
      this.errorMessage = 'No se puede eliminar la ruta. La ruta tiene buses asignados';
    }
  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }





}
