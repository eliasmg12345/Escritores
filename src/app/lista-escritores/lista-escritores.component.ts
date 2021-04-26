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

  /*
  A12 si queremos hacer async await =>A13
  ngOnInit(): void {
    //A8 lugo para visualizar en el navegador html A9
      // this.arrEscritores=this.escritoresService.getAll();

    // A11 llamando a travez de las promesas..pero ya no me retorna el array de 
    // escriotres sino lo que tengo que hacer es atraves del then y aqui en el then
    // me devuelve el array de escritores ..cojo el arrEscritores 
    this.escritoresService.getAllPromise()
    .then(escritors=>{
      this.arrEscritores=escritors;
    })
  }
  */

  /*A13 el async automaticamente nos devuelve si o si una promesa...sobre 
  el arrEscritores simplemente llamando al metodo await puedo volver a llamar a this.
  escritoresSrevicie.getAllPromise();...... ESO SERIA TODO...ahora que tal si 
  queremos filtrar los escritores? nos vamos al html A14
  */
  async ngOnInit(){
    this.arrEscritores=await this.escritoresService.getAllPromise();
  }

  // A15 para el filtradose hace directamente en el servicio  que va atener un 
  // metodo que va a filtrar  y que ve va a devolver esos escritores ya filtrados 
  // sin necesidad que el componente haga nada =>service A16
  /* A17 LLAMANDO AL METODO CON ASYNC AWAIT que me devuelve un aray de escriores
  ...lo vamos almacenar directamente al arrEscritores como ya se esta mostrando en el HTML
  pero si queremos que todo se vuelva a visualizar EN ELHTML agregamos la opcion
  todos y dentro del async hacemos un if y lanzar todo otra vez poniendo lo del A13 */
  /*A18 ahora si queremos clikar en cada escritos que nos muestre sus detalles
  pues creamos mas antes un componente Detalle ..ahora vamos a plantear la ruta en concreto => app-routing B1 */
  async onChange($event){
    console.log($event.target.value);
    if($event.target.value==='todos'){
      this.arrEscritores=await this.escritoresService.getAllPromise();
    }else{
      this.arrEscritores=await this.escritoresService.getByPais($event.target.value);
    }
  }
}
