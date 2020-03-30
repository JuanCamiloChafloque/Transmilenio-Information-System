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
  estaciones: Estacion[];
  llegoRutas = false;
  llegoEstaciones = false;
  llegoBusesRuta = false;
  countBuses = 0;
  errorMessage = '';
  user = environment.user;
  rol = environment.rol;
  buses: Busxruta[];

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
      this.llegoRutas = true;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.getEstaciones(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.estaciones = result;
      this.llegoEstaciones = true;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.getBusesRuta(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.buses = result;
      this.countBuses = this.buses.length;
      this.llegoBusesRuta = true;
    });
  }

  editarRuta(id: number) {
    if (this.rol === 'ADMIN') {
      this.router.navigate([`/editarRuta/${id}`]);
    } else {
      this.errorMessage = 'Error 403. No posee los permisos para editar una ruta';
    }
  }

  eliminarRuta(id: number) {

    if (this.rol === 'ADMIN') {
      if (this.buses.length === 0) {
        this.rutaService.remove(id).subscribe(
          result => console.log('Ruta eliminada!')
        );
        this.router.navigate(['/paginaPrincipalLogin']);
      } else {
        this.errorMessage = 'No se puede eliminar la ruta. La ruta tiene buses asignados';
      }
    } else {
      this.errorMessage = 'Error 403. No posee los permisos para eliminar una ruta';
    }

  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }





}
