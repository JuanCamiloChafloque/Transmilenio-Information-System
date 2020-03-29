import { Component, OnInit } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ConductorService } from '../shared/conductor.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lista-conductor',
  templateUrl: './lista-conductor.component.html',
  styleUrls: ['./lista-conductor.component.css']
})
export class ListaConductorComponent implements OnInit {

  conductores: Conductor[] = [];
  rol = environment.rol;
  user = environment.user;
  errorMessage = '';

  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
    this.getConductores();
  }

  getConductores( ) {
    this.conductorService.findAll().subscribe(
      results => this.conductores = results,
      error => this.errorMessage = error.text
    );
  }

}
