import { Component, OnInit, OnDestroy} from '@angular/core';
import { UsuarioModel } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios: UsuarioModel[] =[];
  indice:number = this.usuarios.length;

  constructor(private usuariosService:UsuariosService,
              private router: Router) {
              }

  ngOnInit(){
    this.usuariosService.obtenerUsuarios().subscribe(
      (res: UsuarioModel[]) =>{
        this.usuarios = res;
        this.usuariosService.setUsuarios(res);
        this.indice = this.usuarios.length;
        console.log(this.usuarios + " recuperados");
      }
    )
  }

  goToAgregar(){
    this.router.navigate(['agregar'])
  }

  resumenUsuarios(){
    confirm("Número total de usuarios: "+ this.usuarios.length)
  }

}
