import { Injectable } from '@angular/core';
import { DatosLiquidacion } from '../Clases/datos-liquidacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceLiquidacionService {

  constructor() { 
  }

  add(datos : DatosLiquidacion){
    let ListDatos : DatosLiquidacion[] = [];
    if(localStorage.getItem('ListDatos') != null){
      ListDatos = JSON.parse(localStorage.getItem("ListDatos"));
    }
    ListDatos.push(datos);
    localStorage.setItem('ListDatos', JSON.stringify(ListDatos));
  }

  getAll(): DatosLiquidacion[]{
    return JSON.parse(localStorage.getItem("ListDatos"))
  }
}
