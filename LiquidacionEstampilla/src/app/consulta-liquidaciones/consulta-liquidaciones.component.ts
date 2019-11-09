import { Component, OnInit } from '@angular/core';
import { DatosLiquidacion } from '../Clases/datos-liquidacion';
import { ServiceLiquidacionService } from '../Servicios/service-liquidacion.service';


@Component({
  selector: 'app-consulta-liquidaciones',
  templateUrl: './consulta-liquidaciones.component.html',
  styleUrls: ['./consulta-liquidaciones.component.css']
})
export class ConsultaLiquidacionesComponent implements OnInit {

  ListDatos : DatosLiquidacion[];
  constructor(private servicio : ServiceLiquidacionService) { }

  ngOnInit() {
    this.ListDatos = this.servicio.getAll();
  }

}
