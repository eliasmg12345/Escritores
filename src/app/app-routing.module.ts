import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';


const routes: Routes = [
  // pathh raiz por defecto
  {path:'',pathMatch:'full',redirectTo:'/escritores'},
  // A3.... =>compo.html A4
  {path:'escritores',component:ListaEscritoresComponent},
  // B1 acompanado del id dinamico entonces /:escritorId =>escritores.service B2 
  // C5 para la ruta hija le agregamos la propiedad children...ya teniendo la ruta hija
  // nos dirigimos en el html padre en concreto => detalle.comp.html C6
  {path:'escritores/:escritorId',component:DetalleComponent,children:[
    {path:'libros',component:ListaLibrosComponent}
  ]},
  // si no encontramos la ruta 
  {path:'**',redirectTo:'/escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
