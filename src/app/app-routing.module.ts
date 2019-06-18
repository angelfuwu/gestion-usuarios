import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes=[
  {path:'', redirectTo:'usuarios',pathMatch:'full'},
  {path:'usuarios',component:UsuariosComponent,children:[
    {path:':id',component:FormularioComponent}
  ]},
  {path:'agregar',component:FormularioComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(
      routes
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
