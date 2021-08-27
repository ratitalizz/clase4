import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //permite crear objetos que se pueden utilizar en nuestra página typeScript

  constructor() {}
  //Para definir una variable se ocupa 
  //nombre:tipo="valor inicial", los tipos pueden ser String, boolean, any,array

  rut:String="19317764-k";
  nombreCompleto:String;
  edad:number;
 //CREAREMOS CONTROLES DE FORMULARIO ASOCIADOS A LA ETIQUETA <ION-INPUT>
 //<ION-INPUT [FormControl]="elRut"> </ion-input> 
 persona= new FormGroup({
  elRut : new FormControl(''),
 elNombreCompleto: new FormControl(''),
 laEdad: new FormControl('')
});
//creacion de un arreglo
  lista_personas= new Array();
  perso:any;
 
//creacion metodo
 grabar(){
   console.log(this.persona.value);
   this.perso={
     run:this.persona.controls.elRut.value,
     nombre:this.persona.controls.elNombreCompleto.value,
     edad:this.persona.controls.laEdad.value,
   
 };
  console.log(this.perso);
  this.lista_personas.push(this.perso)
}
 eliminar(){

 }
  

}
