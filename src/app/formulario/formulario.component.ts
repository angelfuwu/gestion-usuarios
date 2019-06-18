import { Component, OnInit, Injectable, NgZone } from '@angular/core';
import { UsuarioModel } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Injectable()
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  nombreInput:string;
  apellidoInput:string;
  indice:number;
  modo:number
  tipoOperacion:string;

  constructor(private usuariosService: UsuariosService,
              private router: Router,
              private route: ActivatedRoute,
              private ngZone:NgZone,
              private usuarios:UsuariosComponent) { }

  ngOnInit() {
     //recoge el parametro desde el id que esta asociado en el app-routing
     this.indice = this.route.snapshot.params['id'];
     //recoge el parametro [queryParams] del html
     this.modo = +this.route.snapshot.queryParams['modoEdicion'];
     if(this.modo !=null && this.modo ===2){
       this.tipoOperacion ="Modificar";
       let usuario:UsuarioModel = this.usuariosService.encontrarUsuario(this.indice);
       this.nombreInput = usuario.nombre;
       this.apellidoInput = usuario.apellido;
     }else{
      this.tipoOperacion ="Guardar";
     }
  }
  
  onGuardarUsuario(){
    if(this.modo !=null && this.modo ===2){
      //modo modificar
      this.usuariosService.modificarUsuario(new UsuarioModel(this.nombreInput,this.apellidoInput),this.indice);
      this.onVolver();
    }else{
      let newUsuario = new UsuarioModel(
        this.nombreInput.substring(0,this.nombreInput.length-1)+this.nombreInput.charAt(this.nombreInput.length-1).toUpperCase(),
        this.apellidoInput);
      this.usuariosService.agregarUsuario(newUsuario);
      this.onVolver();
    }
    
  }

  onVolver(){
    //agrego temporizador para que escriba en la bdd antes de volver a recoger los datos
    setTimeout(() => {
      if(this.modo ===2){
        this.usuarios.ngOnInit();
      }
      this.router.navigate(['usuarios']);
      console.log("volviendo")
    }, 500);
    /* this.ngZone.run(() => {
       this.usuarios.ngOnInit();
          this.router.navigateByUrl('/usuarios');
        });*/
  }
}
