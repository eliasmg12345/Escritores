import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  // A8
  arrEscritores:Escritor[];


  // A7 pra llamar a getAll aqui en el constructor inyectar el 
  // servicio que vamos a utilizar
  constructor(
    private escritoresService:EscritoresService
  ) { }

  ngOnInit(): void {
    //A8 lugo para visualizar en el navegador html A9
      this.arrEscritores=this.escritoresService.getAll();
  }

}
