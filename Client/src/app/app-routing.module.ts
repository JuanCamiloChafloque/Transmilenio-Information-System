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

const routes: Routes = [
  { path: 'paginaPrincipalLogin', component: MainPageLoginComponent },
  { path: 'paginaPrincipalConductores', component: ListaConductorComponent },
  { path: 'paginaPrincipalConductores/:id', component:  ListaConductorComponent },
  { path: 'paginaPrincipalBuses', component: ListaBusComponent },
  { path: 'paginaPrincipalBuses/:id', component: ListaBusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'informacionConductor/:id', component: VerConductorComponent },
  { path: 'informacionBus/:id', component: VerBusComponent },
  { path: 'crearConductor', component: CrearConductorComponent },
  { path: 'crearBus', component: CrearBusComponent },
  { path: 'editarConductor/:id', component: EditarConductorComponent },
  { path: 'editarBus/:id', component: EditarBusComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
