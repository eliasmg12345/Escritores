import { Injectable } from '@angular/core';
// A5 imporando
import {ESCRITORES} from './db/escritores.db';
import { Escritor } from './models/escritor.model';


@Injectable({
  providedIn: 'root'
})

export class EscritoresService {

  constructor() { }

  // A6 si pongo un getAll me va a devolver un array de Escritores 
  // llamando desde el componente de la lista de escritores ts A7
  getAll():Escritor[]{
    return ESCRITORES;
  }
}
