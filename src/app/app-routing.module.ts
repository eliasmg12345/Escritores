import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';


const routes: Routes = [
  // pathh raiz por defecto
  {path:'',pathMatch:'full',redirectTo:'/escritores'},
  // A3.... =>compo.html A4
  {path:'escritores',component:ListaEscritoresComponent},
  // si no encontramos la ruta 
  {path:'**',redirectTo:'/escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
