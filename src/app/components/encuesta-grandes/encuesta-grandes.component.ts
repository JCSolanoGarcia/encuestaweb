import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnviarDataService } from 'src/app/services/enviar-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta-grandes',
  templateUrl: './encuesta-grandes.component.html',
  styleUrls: ['./encuesta-grandes.component.scss']
})
export class EncuestaGrandesComponent implements OnInit {

  verbtn1: boolean = true;
  verField2: boolean = true; //false
  verbtn2: boolean = false;
  verField3: boolean = true; //false
  verbtn3: boolean = false;
  verField4: boolean = true; //false
  verbtn4: boolean = false;
  verbtn5: boolean = false;
  //capitulo uno
  razon_social: any;
  nombre_comercial: any;
  direccion: any;
  municipio: any;
  departamento: any;
  acepto: boolean = false;
  telefono: any;
  email: any;
  pagina_web: any;
  //capitulo dos
  aba_2_1_1: any;
  cria_2_1_1: any;
  levante_2_1_2: any;
  genetica_2_1_2: any;
  sacrificio_2_2_1: any;
  desposte_2_2_2: any;
  puntoVenta_2_3_1: any;
  grupoVenta_2_3_2: any;
  //capitulo tres
  total_3_1:any;
  total_3_1_hombre: any;
  total_3_1_mujer: any;
  total_3_2:any;
  total_3_2_hombre: any;
  total_3_2_mujer: any;
  total_3_3:any;
  total_3_3_hombre: any;
  total_3_3_mujer: any;
  total_3_4:any;
  total_3_4_hombre: any;
  total_3_4_mujer: any;
  //capitulo cuatro
  total_4_1_1: any;
  total_4_1_1_hombre: any;
  total_4_1_1_mujer: any;
  total_4_1_2: any;
  total_4_1_2_hombre: any;
  total_4_1_2_mujer: any;
  total_4_1_3: any;
  total_4_1_3_hombre: any;
  total_4_1_3_mujer: any;
  total_4_1_4: any;
  total_4_1_4_hombre: any;
  total_4_1_4_mujer: any;
  total_4_1_5: any;
  total_4_1_5_hombre: any;
  total_4_1_5_mujer: any;
  total_4_1_6: any;
  total_4_1_6_hombre: any;
  total_4_1_6_mujer: any;
  total_4_1_7: any;
  total_4_1_7_hombre: any;
  total_4_1_7_mujer: any;
  total_4_1_8: any;
  total_4_1_8_hombre: any;
  total_4_1_8_mujer: any;
  total_4_1_9: any;
  total_4_1_9_hombre: any;
  total_4_1_9_mujer: any;
  total_4_1_10: any;
  total_4_1_10_hombre: any;
  total_4_1_10_mujer: any;
  total_4_2_1: any;
  total_4_2_1_hombre: any;
  total_4_2_1_mujer: any;
  total_4_3_1: any;
  //capitulo cinco
  total_5_1_1: any;
  total_5_1_1_hombre: any;
  total_5_1_1_mujer: any;
  total_5_1_2: any;
  total_5_1_2_hombre: any;
  total_5_1_2_mujer: any;
  total_5_1_3: any;
  total_5_1_3_hombre: any;
  total_5_1_3_mujer: any;
  total_5_1_4: any;
  total_5_1_4_hombre: any;
  total_5_1_4_mujer: any;
  total_5_1_5: any;
  total_5_1_5_hombre: any;
  total_5_1_5_mujer: any;
  total_5_1_6: any;
  total_5_1_6_hombre: any;
  total_5_1_6_mujer: any;
  total_5_1_7: any;
  total_5_1_7_hombre: any;
  total_5_1_7_mujer: any;
  total_5_1_8: any;
  total_5_1_8_hombre: any;
  total_5_1_8_mujer: any;
  total_5_1_9: any;
  total_5_1_9_hombre: any;
  total_5_1_9_mujer: any;
  total_5_2_1: any;
  total_5_2_1_hombre: any;
  total_5_2_1_mujer: any;
  total_5_3_1: any;
  total_5_3_2: any;
  total_5_3_3: any;
  //capitulo seis
  total_6_1_1: any;
  total_6_1_1_hombre: any;
  total_6_1_1_mujer: any;
  total_6_1_2: any;
  total_6_1_2_hombre: any;
  total_6_1_2_mujer: any;
  total_6_1_3: any;
  total_6_1_3_hombre: any;
  total_6_1_3_mujer: any;
  total_6_1_4: any;
  total_6_1_4_hombre: any;
  total_6_1_4_mujer: any;
  total_6_1_5: any;
  total_6_1_5_hombre: any;
  total_6_1_5_mujer: any;
  total_6_1_6: any;
  total_6_1_6_hombre: any;
  total_6_1_6_mujer: any;
  total_6_1_7: any;
  total_6_1_7_hombre: any;
  total_6_1_7_mujer: any;
  total_6_2_1: any;
  total_6_2_1_hombre: any;
  total_6_2_1_mujer: any;
  total_6_3_1: any;
  total_6_3_2: any;
  //capitulo siete
  total_7_1_1: any;
  total_7_1_1_hombre: any;
  total_7_1_1_mujer: any;
  total_7_1_2: any;
  total_7_1_2_hombre: any;
  total_7_1_2_mujer: any;
  total_7_1_3: any;
  total_7_1_3_hombre: any;
  total_7_1_3_mujer: any;
  total_7_1_4: any;
  total_7_1_4_hombre: any;
  total_7_1_4_mujer: any;
  total_7_1_5: any;
  total_7_1_5_hombre: any;
  total_7_1_5_mujer: any;
  total_7_1_6: any;
  total_7_1_6_hombre: any;
  total_7_1_6_mujer: any;
  total_7_1_7: any;
  total_7_1_7_hombre: any;
  total_7_1_7_mujer: any;
  total_7_1_8: any;
  total_7_1_8_hombre: any;
  total_7_1_8_mujer: any;
  total_7_1_9: any;
  total_7_1_9_hombre: any;
  total_7_1_9_mujer: any;
  total_7_2_1: any;
  total_7_2_1_hombre: any;
  total_7_2_1_mujer: any;
  total_7_3_1: any;
  //capitulo ocho
  nivel_8_1_1: any;
  nivel_8_1_2: any;
  nivel_8_1_3: any;
  nivel_8_1_4: any;
  nivel_8_1_5: any;
  nivel_8_1_6: any;
  nivel_8_1_7: any;
  nivel_8_1_8: any;
  nivel_8_1_9: any;
  nivel_8_2_1: any;
  nivel_8_2_2: any;
  nivel_8_2_3: any;
  nivel_8_2_4: any;
  nivel_8_2_5: any;
  nivel_8_2_6: any;
  nivel_8_2_7: any;
  nivel_8_2_8: any;
  nivel_8_2_9: any;
  nivel_8_3_1: any;
  nivel_8_3_2: any;
  nivel_8_3_3: any;
  nivel_8_3_4: any;
  nivel_8_3_5: any;
  nivel_8_3_6: any;
  nivel_8_4_1: any;
  nivel_8_4_2: any;
  nivel_8_4_3: any;
  nivel_8_4_4: any;
  nivel_8_4_5: any;
  nivel_8_4_6: any;
  nivel_8_4_7: any;
  nivel_8_4_8: any;

  listaEscala: any []= [
    {nivel: '1. Entre 1 y 1.5 SMLV'},
    {nivel: '2. Entre 1.5 y 2.5 SMLV'},
    {nivel: '3. Entre 2.5 y 3 SMLV'},
    {nivel: '4. Entre 3 y 5 SMLV'},
    {nivel: '5. Entre 5 y 10 SMLV'},
    {nivel: '6. Entre 10 y 15 SMLV'},
    {nivel: '7. Mayor a 15 SMLV'},
  ]

  nombre_9_1: any;
  cargo_9_2: any;
  celular_9_3: any;
  email_9_4: any;

  verSeccion4: boolean = true; //false
  verSeccion5: boolean = true; //false
  verSeccion6: boolean = true; //false
  verSeccion7: boolean = true; //false

  

  constructor(
    private postData: EnviarDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.listaEscala);
    
  }

  continuar1(){
    let accion1: any = document.getElementById("field1");
    let accion2: any = document.getElementById("btn1");
    let accion3: any = document.getElementById("btn2");
    console.log(accion2.textContent )
    if(accion2.textContent == "Continuar 1"){
      if(this.acepto && this.razon_social && this.nombre_comercial && this.direccion && this.municipio && this.departamento && this.telefono && this.email && this.pagina_web){      
        accion1.style.display = "none";
        accion2.textContent = "Atras 1";
        this.verField2 = true;
        this.verbtn2 = true
      }else{
        this.verField2 = false;
        this.errorMesagge('Atencion!!', 'Falta información por registrar.');
      }
    }else{
      accion1.style.display = "block";
      this.verField2 = false;
      accion2.textContent = "Continuar 1";
      accion3.style.display = "none";
    }    
  }

  continuar2(){
    let accion1: any = document.getElementById("field2");
    let accion2: any = document.getElementById("btn2");
    let accion3: any = document.getElementById("btn1");
    console.log(accion2.textContent )
    if(accion2.textContent == "Continuar 2"){
      if(this.cria_2_1_1 || this.levante_2_1_2 || this.genetica_2_1_2 || this.sacrificio_2_2_1 || this.desposte_2_2_2 || this.puntoVenta_2_3_1 || this.grupoVenta_2_3_2){      
        accion1.style.display = "none";
        accion2.textContent = "Atras 2";
        accion3.style.display = "none";
        this.verbtn3 = true
        this.verField3 = true;
      }else{
        this.verField3 = false;
        this.errorMesagge('Atencion!!', 'Falta información por registrar.');
      }
    }else{
      accion1.style.display = "block";
      this.verField3 = false;
      accion2.textContent = "Continuar 2";
      accion3.style.display = "block";
    }    
  }

  continuar3(){
    let accion1: any = document.getElementById("field3");
    let accion2: any = document.getElementById("btn3");
    let accion3: any = document.getElementById("btn2");
    console.log(accion2.textContent )
    if(accion2.textContent == "Continuar 3"){
      if(this.total_3_1 || this.total_3_2 || this.total_3_3 || this.total_3_4 ){      
        accion1.style.display = "none";
        accion2.textContent = "Atras 3";
        accion3.style.display = "none";
        this.verbtn4 = false;
        this.mostrarSeccion4();
      }else{
        this.verSeccion4 = false;
        this.errorMesagge('Atencion!!', 'Falta información por registrar.');
      }
    }else{
      accion1.style.display = "block";
      this.verSeccion4 = false;
      accion2.textContent = "Continuar 3";
      accion2.style.display = "none";
    }    
  }

  mostrarSeccion4(){
    if(this.cria_2_1_1 || this.levante_2_1_2 || this.genetica_2_1_2){
      this.verSeccion4 = true;
      this.verbtn4 = true;
    }else{
      this.verSeccion4 = false;
      this.verbtn4 = false;
      this.mostrarSeccion5();
    }
  }

  continuar4(){
    let accion1: any = document.getElementById("field4");
    let accion2: any = document.getElementById("btn4");
    let accion3: any = document.getElementById("btn3");
    console.log(accion2.textContent )
    if(accion2.textContent == "Continuar 4"){
      if(this.total_3_1 || this.total_3_2 || this.total_3_3 || this.total_3_4 ){      
        //accion1.style.display = "none";
        this.verSeccion4 = false;
        accion2.textContent = "Atras 4";
        accion3.style.display = "none";
        this.verbtn4 = false;
        this.mostrarSeccion5();
      }else{
        this.verSeccion4 = false;
        this.errorMesagge('Atencion!!', 'Falta información por registrar.');
      }
    }else{
      //accion1.style.display = "block";
      this.verSeccion4 = true;
      this.verSeccion5 = false;
      accion2.textContent = "Continuar 4";
      accion2.style.display = "none";
    }    
  }

  mostrarSeccion5(){
    if(this.cria_2_1_1 || this.levante_2_1_2 || this.genetica_2_1_2){
      this.verSeccion5 = true;
    }else{
      this.verSeccion5 = false;
      this.mostrarSeccion6();
    }
  }

  mostrarSeccion6(){
    if(this.cria_2_1_1 || this.levante_2_1_2 || this.genetica_2_1_2){
      this.verSeccion6 = true;
    }else{
      this.verSeccion6 = false;
      this.mostrarSeccion7();
    }
  }

  mostrarSeccion7(){
    if(this.cria_2_1_1 || this.levante_2_1_2 || this.genetica_2_1_2){
      this.verSeccion7 = true;
    }else{
      this.verSeccion7 = false;
    }
  }

  aba(){
    let acc: any = document.getElementById("panel1");
    if (acc.style.display === "block") {
      acc.style.display = "none";
    } else {
      acc.style.display = "block";
    }
  }

  primaria(){
    let acc: any = document.getElementById("panel2");
    if (acc.style.display === "block") {
      acc.style.display = "none";
    } else {
      acc.style.display = "block";
    }
    
  }

  transformacion(){
    let acc: any = document.getElementById("panel3");
    if (acc.style.display === "block") {
      acc.style.display = "none";
    } else {
      acc.style.display = "block";
    }
    
  }

  mercadeo(){
    let acc: any = document.getElementById("panel4");
    if (acc.style.display === "block") {
      acc.style.display = "none";
    } else {
      acc.style.display = "block";
    }
    
  }

  verificarData(){
    console.log('Hola mundo');
    
  }

  errorMesagge(titulo: any, texto: any){
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((acepto)=>{
      if(acepto.value){
        return;        
      }else{
        return;
      }
    })
  }

}
