import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisualizarCorrecoesComponent } from './visualizar-correcoes/visualizar-correcoes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'visualizar-correcoes', component: VisualizarCorrecoesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
