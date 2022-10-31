import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnviarDataService } from 'src/app/services/enviar-data.service';
import { ExtraerDataService } from 'src/app/services/extraer-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-encuesta-expendio',
  templateUrl: './encuesta-expendio.component.html',
  styleUrls: ['./encuesta-expendio.component.scss']
})
export class EncuestaExpendioComponent implements OnInit {

  listaEncuestador: any;
  cargaInicial: any[] = [];
  listaGeneral: any;
  listaExpendios: any[] = [];
  encuestador: any;
  expendio: any;
  nit: any;
  departamento: any;
  direccion: any;
  ciudad: any;
  nombre_encuestado: any;
  telefono_encuestado: any;
  acepto: boolean = false;
  total_kilos: any;
  kilos_canal: any;
  kilos_astilla: any;
  kilos_despostado: any;
  porcentaje: any;
  total_empleos: any;
  total_empleo_hombre: any;
  total_empleo_mujer: any;
  total_admin: any;
  total_admin_hombre: any;
  total_admin_mujer: any;
  total_operativo: any;
  total_operativo_hombre: any;
  total_operativo_mujer: any;
  flagBtn: boolean = true;

  constructor(
    private getData: ExtraerDataService,
    private postData: EnviarDataService,
    private router: Router,
  ) { 
    this.listarDatos();
  }

  ngOnInit(): void {
  }

  listarDatos(){
    this.getData.getListado().subscribe((resp: any)=>{
      console.log(resp);
      this.listaGeneral = resp;
      this.filtrarEncuestador(resp);
      
    }, error=>{
      console.log(error);      
    })
  }

  filtrarEncuestador(data: any){
    this.cargaInicial = [];
    for(let dato of data){
      this.cargaInicial.push(dato.encuestador)
    }
    this.listaEncuestador = this.cargaInicial.filter((item: any,index: any)=>{
      return this.cargaInicial.indexOf(item) === index;
    });         
  }

  filtrar(){
    console.log('aqui', this.encuestador);
    this.listaExpendios = []
    for(let item of this.listaGeneral){
      if(item.encuestador == this.encuestador){
        this.listaExpendios.push(item);
      }
    }
    console.log(this.listaExpendios);    
  }

  filtrarExpendios(){
    for(let item of this.listaGeneral){
      if(item.expendio == this.expendio && item.encuestador == this.encuestador){
        this.nit = item.nit;
        this.departamento = item.departamento;
        this.direccion = item.direccion;
        this.ciudad = item.ciudad;
      }
    } 
  }

  verificarData(){
    if(this.nombre_encuestado && this.telefono_encuestado && this.total_kilos != null && this.kilos_canal != null && this.kilos_astilla != null && this.kilos_despostado != null && this.porcentaje != null && this.total_empleos != null && this.total_empleo_hombre != null && this.total_empleo_mujer != null && this.total_admin != null && this.total_admin_hombre != null && this.total_admin_mujer != null && this.total_operativo != null && this.total_operativo_hombre != null && this.total_operativo_mujer != null){  
      this.enviarData();  
    }else{
      this.errorMesagge();
    }
  }

  enviarData(){    
    let data ={
      'Fecha registro': new Date().toLocaleString('es-CO'),
      'Acepto las políticas': this.acepto,
      '1. Encuestador': this.encuestador,
      '2. Expendio': this.expendio,
      '3. NIT': this.nit,
      '4. Dirección': this.direccion,
      '5. Departamento': this.departamento,
      '6. Ciudad': this.ciudad,
      '7. Nombre encuestado': this.nombre_encuestado,
      '8. Teléfono encuestado': this.telefono_encuestado,
      '9. Total de kilos comercializados': this.total_kilos,
      '10. Kilos en canal': this.kilos_canal,
      '11. Kilos en astilla': this.kilos_astilla,
      '12. Kilos despostado': this.kilos_despostado,
      '13. Porcentaje de ventas': this.porcentaje,
      '14. Total de personal': this.total_empleos,
      '15. Total hombres': this.total_empleo_hombre,
      '16. Total mujeres': this.total_empleo_mujer,
      '17. Total administrativos': this.total_admin,
      '18. Total administrativos hombres': this.total_admin_hombre,
      '19. Total administrativos mujeres': this.total_admin_mujer,
      '20. Total operativos': this.total_operativo,
      '21. Total operativos hombres': this.total_operativo_hombre,
      '22. Total operativos mujeres': this.total_operativo_mujer,
    }
    this.postData.postListado(data).subscribe((resp: any)=>{
      this.router.navigateByUrl('/confirmacion')
    })
  }

  errorMesagge(){
    Swal.fire({
      title: 'Atención!!!',
      text: 'Tiene campos sin diligenciar, revise e intentelo de nuevo.',
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
