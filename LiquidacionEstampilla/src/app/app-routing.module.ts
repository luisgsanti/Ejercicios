import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaLiquidacionesComponent } from '../app/consulta-liquidaciones/consulta-liquidaciones.component';
import { RegistroLiquidacionesComponent } from '../app/registro-liquidaciones/registro-liquidaciones.component';

const routes: Routes = [
  {path: 'Liquidacion/ConsultaLiquidacion', component: ConsultaLiquidacionesComponent},
  {path: 'Liquidacion/RegistroLiquidacion', component: RegistroLiquidacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
