import { Component, OnInit } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../shared/ruta.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit {

  ruta: Ruta = null;

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
  }

  edit() {
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
