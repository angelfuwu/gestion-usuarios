import { UsuarioModel } from './usuario.model';
import { Injectable } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()
export class UsuariosService {
    usuarios: UsuarioModel[] = [];

    constructor(private dataServices:DataServices) {}
    
    setUsuarios(usuarios: UsuarioModel[]){
        this.usuarios = usuarios
    }

    obtenerUsuarios(){
        return this.dataServices.cargarUsuarios();
    }
    
    getUsuarios(){
        return this.usuarios;
    }
    
    agregarUsuario(usuario: UsuarioModel) {
        if(this.usuarios == null){
            this.usuarios = [];
        }
        this.usuarios.push(usuario);
        this.dataServices.guardarUsuarios(this.usuarios);
        console.log("usuario agregado: " + usuario.nombre + " "+ usuario.apellido);
        
    }
    
    encontrarUsuario(indice: number){
        let usuario: UsuarioModel= this.usuarios[indice];
        return usuario
    }

    modificarUsuario(usuario:UsuarioModel,indice:number){
        this.dataServices.modificarUsuario(usuario,indice)
    }

    
}