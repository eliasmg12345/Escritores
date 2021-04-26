import { Injectable } from '@angular/core';
// C2 importando el array con el que vamos a trabajar
import {LIBROS} from './db/libros.db';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  // C3 AHORA LO QUE TENGO QUE HACER ES CONTRUIR LAS DIFERENTES ACCIONES QUE QUIERO HACER
  /*  -si quiero filtrarlos
      -si quiero ordenarlos, ETC*/

  // C3 lo que nos ineresa es obtenerlo a traves del escritor por lo tanto creamos:
  // C4 luego creamos un componete para el listado de libros ...luego ya podemos trabajar con 
  // una ruta hija
  getByEscritor(escritorId):Promise<Libro[]>{
    return new Promise((resolve,reject)=>{
      const arrFiltrado=LIBROS.filter(libro=>{
        return libro.escritor===escritorId;
      });
      resolve(arrFiltrado);
    })

  }
}
