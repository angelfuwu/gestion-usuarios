import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';
import { Router } from '@angular/router';


@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient,private router:Router){}

    cargarUsuarios(){
        return this.httpClient.get('https://gestion-usuarios-6b1ab.firebaseio.com/datos.json');
    }

    guardarUsuarios(usuarios: UsuarioModel[]){
        this.httpClient.put('https://gestion-usuarios-6b1ab.firebaseio.com/datos.json',usuarios)
        .subscribe(
            response =>{console.log("Usuarios guardados"+ response)},
            error =>{console.log("error al guardar usuarios" + error)}
        )
    }

    modificarUsuario(usuario:UsuarioModel,indice:number){
        let url:string ='https://gestion-usuarios-6b1ab.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.put(url,usuario).subscribe(
            response =>console.log("usuario modificado" + usuario),
            error => console.log("error al modificar: "+usuario)
        )
    }
}