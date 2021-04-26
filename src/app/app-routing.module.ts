import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';


const routes: Routes = [
  // pathh raiz por defecto
  {path:'',pathMatch:'full',redirectTo:'/escritores'},
  // A3.... =>compo.html A4
  {path:'escritores',component:ListaEscritoresComponent},
  // B1 acompanado del id dinamico entonces /:escritorId =>escritores.service B2 
  {path:'escritores/:escritorId',component:DetalleComponent},
  // si no encontramos la ruta 
  {path:'**',redirectTo:'/escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
