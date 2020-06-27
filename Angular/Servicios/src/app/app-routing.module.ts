import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';


const routes: Routes = [
  { path: 'personas', component: ListaPersonasComponent },
  { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritores/:escritorId', component: DetalleEscritorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
