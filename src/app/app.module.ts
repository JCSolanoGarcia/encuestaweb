import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaExpendioComponent } from './components/encuesta-expendio/encuesta-expendio.component';
import { ExitoComponent } from './components/exito/exito.component';
import { EncuestaGrandesComponent } from './components/encuesta-grandes/encuesta-grandes.component';
import { ConfirmaComponent } from './components/confirma/confirma.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaExpendioComponent,
    ExitoComponent,
    EncuestaGrandesComponent,
    ConfirmaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
