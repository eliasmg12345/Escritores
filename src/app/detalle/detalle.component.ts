import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EscritoresService} from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  // B3 creando una variable
  escritor:Escritor;
  
  
  // B3 recuperando la variable de la url paara eso necesitamos inyectar
  // un servicio propio de angular llamado ActivatedRoute...ahora siempre que 
  // trabajemos con un servicio tenemos que inyectarlo por lo tanto , EscritoresService
  // serciorandonos que se haya importado
  constructor(private activatedRoute:ActivatedRoute,private escritoresService:EscritoresService) { }


  
   ngOnInit(){
    // B3 usando la propiedad params que nos devolvia los paramateros de las variables 
    //  esto es un observable por lo tanto nos suscribimos ...dentro de este llamamos
    // al metodo que getById y comvirtiendolo a entero con parseInt

    // B4 NO OLVIDAR llevar  a async poque nos devuelve una promesa..ahora si en 
    // el html => detalle.html B5
    this.activatedRoute.params.subscribe(async params=>{
      console.log(params.escritorId);
      this.escritor = await  this.escritoresService.getById(parseInt(params.escritorId));  
      console.log(this.escritor);
    });
  }

}
