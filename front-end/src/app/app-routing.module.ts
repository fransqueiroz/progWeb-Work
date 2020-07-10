import { BasicComponent } from './layout/basic/basic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { HomeComponent } from './static/home/home.component';
import { EmpresaFormComponent } from './empresa/empresa-form/empresa-form.component';
import { VagaListComponent } from './vaga/vaga-list/vaga-list.component';
import { VagaFormComponent } from './vaga/vaga-form/vaga-form.component';
import { CandidatoListComponent } from './candidato/candidato-list/candidato-list.component';
import { CandidatoFormComponent} from './candidato/candidato-form/candidato-form.component';
import { CurriculoListComponent } from './curriculo/curriculo-list/curriculo-list.component';
import { CurriculoFormComponent } from './curriculo/curriculo-form/curriculo-form.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'empresa',
    component: BasicComponent,
    children: [
      { path: 'novo', component: EmpresaFormComponent, pathMatch: 'full'},
      { path: ':id', component: EmpresaFormComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'vaga',
    component: BasicComponent,
    children: [
      { path: 'novo', component: VagaFormComponent, pathMatch: 'full'},
      { path: ':id', component: VagaFormComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'candidato',
    component: BasicComponent,
    children: [
      { path: 'novo', component: CandidatoFormComponent, pathMatch: 'full'},
      { path: ':id', component: CandidatoFormComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'curriculo',
    component: BasicComponent,
    children: [
      { path: 'novo', component: CurriculoFormComponent, pathMatch: 'full'},
      { path: ':id', component: CurriculoFormComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'dashboard',
    component: BasicComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full'},
      { path: ':location', component: DashboardComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
