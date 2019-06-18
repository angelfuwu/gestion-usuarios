import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from '../usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  @Input() usuario:UsuarioModel; 
  @Input() indice:number; 

  constructor() {}

  ngOnInit() {
  }
  

}
