import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmaComponent } from './components/confirma/confirma.component';
import { EncuestaExpendioComponent } from './components/encuesta-expendio/encuesta-expendio.component';
import { EncuestaGrandesComponent } from './components/encuesta-grandes/encuesta-grandes.component';
import { ExitoComponent } from './components/exito/exito.component';

const routes: Routes = [
  {path: 'formulario', component: EncuestaExpendioComponent},
  {path: 'encuesta', component: EncuestaGrandesComponent},
  {path: 'confirmacion', component: ExitoComponent},
  {path: 'confirma', component: ConfirmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
