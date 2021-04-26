import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  // D3
  libros:Libro[];

  // D1 INYECTANDO el servicio...luego llamando al metodo en concreto pero 
  // necesitamos el Id lo podemos hacer con el metodo de angular ActivatedRoute
  constructor(
    private librosService:LibrosService,
    private activatedRoute:ActivatedRoute
  ) { 

  }

  // D2 utilizando pero primero se accede al padre .parent y de ahi . params
  // lo mismo si es un observable me suscribo luego recibo los parametros cada
  // vez que se modifique ...no olvidar que el servicioo viene de una promesa
  // por lo tanto usamo el async await..ademas de volverlo entero
  // D3 lo almacenamos en una variable libros..ahora puedo visualizar en =>html D4
  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe( async params=>{
      this.libros=await this.librosService.getByEscritor(parseInt(params.escritorId));     
      console.log(this.libros);
    });
  }

}
