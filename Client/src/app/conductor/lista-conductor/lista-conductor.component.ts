import { Component, OnInit } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ConductorService } from '../shared/conductor.service';

@Component({
  selector: 'app-lista-conductor',
  templateUrl: './lista-conductor.component.html',
  styleUrls: ['./lista-conductor.component.css']
})
export class ListaConductorComponent implements OnInit {

  conductores: Conductor[] = [];
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
