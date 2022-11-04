import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { BancoDeQuestoesComponent } from './banco-de-questoes/banco-de-questoes.component';
import { AgendarNovaProvaComponent } from './agendar-nova-prova/agendar-nova-prova.component';
import { CorrigirProvasComponent } from './corrigir-provas/corrigir-provas.component';
import { GestaoDisciplinasComponent } from './gestao-disciplinas/gestao-disciplinas.component';
import { VisualizarEstatisticasComponent } from './visualizar-estatisticas/visualizar-estatisticas.component';
import { RealizarProvaComponent } from './realizar-prova/realizar-prova.component';
import { VisualizarCorrecoesComponent } from './visualizar-correcoes/visualizar-correcoes.component';
import { HeaderComponent } from './header/header.component';
import { HomeAlunoComponent } from './home/home-aluno/home-aluno.component';
import { HomeProfessorComponent } from './home/home-professor/home-professor.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    HomeComponent,
    BancoDeQuestoesComponent,
    AgendarNovaProvaComponent,
    CorrigirProvasComponent,
    GestaoDisciplinasComponent,
    VisualizarEstatisticasComponent,
    RealizarProvaComponent,
    VisualizarCorrecoesComponent,
    HeaderComponent,
    HomeAlunoComponent,
    HomeProfessorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class DashboardModule { }
