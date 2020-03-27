import { Component, OnInit } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-conductor',
  templateUrl: './editar-conductor.component.html',
  styleUrls: ['./editar-conductor.component.css']
})
export class EditarConductorComponent implements OnInit {

  conductor: Conductor = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => this.conductorService.findById(+params.get('id')))
      )
      .subscribe(result => {
        this.conductor = result;
      });
  }

  edit() {
    this.conductorService.update(this.conductor).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/informacionConductor/${this.conductor.id}`]);
      },
      error => {
        console.error(error);
      }
    );

  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
  }

}
