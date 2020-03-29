import { Component, OnInit } from '@angular/core';
import { BusService } from '../shared/bus.service';
import { Bus } from '../shared/Bus';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lista-bus',
  templateUrl: './lista-bus.component.html',
  styleUrls: ['./lista-bus.component.css']
})
export class ListaBusComponent implements OnInit {

  buses: Bus[] = [];
  user = environment.user;
  rol = environment.rol;
  errorMessage = '';

  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.getBuses();
  }

  getBuses() {
    this.busService.findAll().subscribe(
      results => this.buses = results,
      error => this.errorMessage = error.text
    );
  }

}
