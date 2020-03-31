import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { ListaConductorComponent } from './conductor/lista-conductor/lista-conductor.component';
import { VerConductorComponent } from './conductor/ver-conductor/ver-conductor.component';
import { CrearBusComponent } from './bus/crear-bus/crear-bus.component';
import { EditarBusComponent } from './bus/editar-bus/editar-bus.component';
import { ListaBusComponent } from './bus/lista-bus/lista-bus.component';
import { VerBusComponent } from './bus/ver-bus/ver-bus.component';
import { MainPageLoginComponent } from './mainPage/main-page-login/main-page-login.component';
import { ConductorService } from './conductor/shared/conductor.service';
import { BusService } from './bus/shared/bus.service';
import { VerRutaComponent } from './ruta/ver-ruta/ver-ruta.component';
import { ListaRutaComponent } from './ruta/lista-ruta/lista-ruta.component';
import { CrearRutaComponent } from './ruta/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './ruta/editar-ruta/editar-ruta.component';
import { RutaService } from './ruta/shared/ruta.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearConductorComponent,
    EditarConductorComponent,
    ListaConductorComponent,
    VerConductorComponent,
    CrearBusComponent,
    EditarBusComponent,
    ListaBusComponent,
    VerBusComponent,
    MainPageLoginComponent,
    VerRutaComponent,
    ListaRutaComponent,
    CrearRutaComponent,
    EditarRutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConductorService,
    BusService,
    RutaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
