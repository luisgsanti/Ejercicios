import { Component, OnInit } from '@angular/core';
import { DatosLiquidacion } from '../Clases/datos-liquidacion';
import { ServiceLiquidacionService } from '../Servicios/service-liquidacion.service';

@Component({
  selector: 'app-registro-liquidaciones',
  templateUrl: './registro-liquidaciones.component.html',
  styleUrls: ['./registro-liquidaciones.component.css']
})
export class RegistroLiquidacionesComponent implements OnInit {

  Dato : DatosLiquidacion;
  
  constructor(private servicio : ServiceLiquidacionService) { }

  ngOnInit() {
  }

  add(): void {

    this.servicio.add(this.Dato);
    alert('Se agrego un nuevo contrato');
  }
}
