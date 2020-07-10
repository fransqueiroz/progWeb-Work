import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';
import { HomeComponent } from './static/home/home.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicComponent } from './layout/basic/basic.component';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { EmpresaFormComponent } from './empresa/empresa-form/empresa-form.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { VagaListComponent } from './vaga/vaga-list/vaga-list.component';
import { VagaFormComponent } from './vaga/vaga-form/vaga-form.component';
import { CandidatoListComponent } from './candidato/candidato-list/candidato-list.component';
import { CurriculoListComponent } from './curriculo/curriculo-list/curriculo-list.component';
import { CandidatoFormComponent } from './candidato/candidato-form/candidato-form.component';
import { CurriculoFormComponent } from './curriculo/curriculo-form/curriculo-form.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    EmpresaListComponent,
    LandingPageComponent,
    HomeComponent,
    MainFooterComponent,
    DashboardComponent,
    BasicComponent,
    ConfirmDlgComponent,
    EmpresaFormComponent,
    VagaListComponent,
    VagaFormComponent,
    CandidatoListComponent,
    CurriculoListComponent,
    CandidatoFormComponent,
    CurriculoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
