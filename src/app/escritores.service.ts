import { Injectable } from '@angular/core';
// A5 imporando
import {ESCRITORES} from './db/escritores.db';
import { Escritor } from './models/escritor.model';


@Injectable({
  providedIn: 'root'
})

export class EscritoresService {

  constructor() { }

  // A6 si pongo un getAll me va a devolver un array de Escritores ..no olvidar la importacion 
  // llamando desde el componente de la lista de escritores ts A7
  getAll():Escritor[]{
    return ESCRITORES;
  }

/*ES IMPORANTE TRABAJR COM PROMESAS porque si trabajamos con servidores externos
con la parte del bcck de nuestra aplicacion casi siempre tendremos que hacerlos
con promesas porque no sabemos lo que pueden tardar en devolvernos los datos*/
  /*A10 vamos acrear otro getAllPromise teniendo en claro qe devuelve este metodo
  //lo que temnemos en claro es que devuelve un Promesa :Promise<> esta promesa tenemos
  que ponerle entre manor y mayor cual va ser el dato al que va a resolver 
  ES DECIR CUANDO YO LLAME AL METODO RESOLVE DE LA PROMESA QUE DATO VOY A METER 
  AHI DENTRO QUE TIPO DE DATO en nuestro caso sera un array Escritor[] y siempre 
  tiene que devolver  return new Promise((reolve,reject)=>{})    como es una promesa
  que nuncava a fallar resolvemos la promesa directamente enviando el array ESCRITORES
  Como cambia cuando llamamos desde la lista de escritores ????? => lista.escr.ts A11*/
  getAllPromise():Promise<Escritor[]>{
    return new Promise((resolve,reject)=>{
      resolve(ESCRITORES);
    });
  }  

  /*A16 ya que estamos trabajando com promesas crearemos getByPais() le paso
  el paramtero pPais y todo esto se que me va devolver una promesa y en este caso
  com ovoy a filtrar los escritores me va seguir devolviendo un array <Escritor[]>
  pero solo los que correspondan con el pPais ...*/
  /* usamos el metodo filter que recibe una funcion anonima la cual nos da un acceso
  a cada uno de los escritores del array _____ultimamente lo que tengo que hacer es
  devolver la promesa con el array filtrado*/
  getByPais(pPais:string):Promise<Escritor[]>{
    return new Promise((resolve,reject)=>{
      const arrFiltrado=ESCRITORES.filter(escritor=>{
        return escritor.pais===pPais;
      });
      resolve(arrFiltrado); //ahora a => lista.escri.ts A17
    });
  }

  /*B2 quiero recuperar el escritor por Id 
  en la promesa quiero que me recupere un unico escritor entonces sin los corchetes 
  y usando el metodo .find ...ahora en => detalle.ts B3*/
  getById(escritorId): Promise<Escritor|any>{
    return new Promise((resolve,reject)=>{
      const escritorFoun=ESCRITORES.find(escritor=>{
        return escritor.id===escritorId;
      });
      resolve(escritorFoun);
    })
  }


}

