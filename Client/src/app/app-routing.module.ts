import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerConductorComponent } from './conductor/ver-conductor/ver-conductor.component';
import { VerBusComponent } from './bus/ver-bus/ver-bus.component';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { CrearBusComponent } from './bus/crear-bus/crear-bus.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { EditarBusComponent } from './bus/editar-bus/editar-bus.component';
import { MainPageLoginComponent } from './mainPage/main-page-login/main-page-login.component';
import { ListaConductorComponent } from './conductor/lista-conductor/lista-conductor.component';
import { ListaBusComponent } from './bus/lista-bus/lista-bus.component';
import { ListaRutaComponent } from './ruta/lista-ruta/lista-ruta.component';
import { VerRutaComponent } from './ruta/ver-ruta/ver-ruta.component';
import { CrearRutaComponent } from './ruta/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './ruta/editar-ruta/editar-ruta.component';

const routes: Routes = [
  { path: 'paginaPrincipalLogin', component: MainPageLoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'paginaPrincipalConductores', component: ListaConductorComponent },
  { path: 'paginaPrincipalConductores/:id', component:  ListaConductorComponent },
  { path: 'paginaPrincipalBuses', component: ListaBusComponent },
  { path: 'paginaPrincipalBuses/:id', component: ListaBusComponent },
  { path: 'paginaPrincipalRutas', component: ListaRutaComponent },
  { path: 'paginaPrincipalRutas/:id', component: ListaRutaComponent },
  { path: 'informacionConductor/:id', component: VerConductorComponent },
  { path: 'informacionBus/:id', component: VerBusComponent },
  { path: 'informacionRuta/:id', component: VerRutaComponent },
  { path: 'crearConductor', component: CrearConductorComponent },
  { path: 'crearBus', component: CrearBusComponent },
  { path: 'crearRuta', component: CrearRutaComponent },
  { path: 'editarConductor/:id', component: EditarConductorComponent },
  { path: 'editarBus/:id', component: EditarBusComponent },
  { path: 'editarRuta/:id', component: EditarRutaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
