import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroLiquidacionesComponent } from './registro-liquidaciones/registro-liquidaciones.component';
import { ConsultaLiquidacionesComponent } from './consulta-liquidaciones/consulta-liquidaciones.component';
import { ServiceLiquidacionService } from './Servicios/service-liquidacion.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    RegistroLiquidacionesComponent,
    ConsultaLiquidacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceLiquidacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
