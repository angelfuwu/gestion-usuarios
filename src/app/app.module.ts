import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuariosService } from './usuarios.service';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { DataServices } from './data.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatCheckboxModule, MatBadgeModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [UsuariosService,DataServices,UsuariosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
