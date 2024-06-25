import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioRecibido: string='';
  passwordRecibido: string='';

  nombre: any='';
  apellido: any='';
  selectedOption: any='';
  selectedDate: any='';

  usuarioRecibidoPersistente: any='';

  constructor(private router:Router, private activateroute:ActivatedRoute, private alertController: AlertController, private toastController:ToastController) {
    this.activateroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        localStorage.setItem('usuarioRecibidoPersistente', this.usuarioRecibido)
        console.log();
      } 
    })
  }
  
  ngOnInit(){
    this.nombre = localStorage.getItem("nombre");
    this.apellido = localStorage.getItem("apellido");
    this.selectedOption = localStorage.getItem("selectedOption");
    this.selectedDate = localStorage.getItem("selectedDate");

    this.usuarioRecibidoPersistente = localStorage.getItem("usuarioRecibidoPersistente");
  }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  mostrar(){
    if (this.nombre.trim() === '' || this.apellido.trim() === ''){
      this.presentAlert('Error: Nombre y Apellido vacios');

      } else {
        //Logica paera manejar el envio del formulario cuando es valido
        this.presentAlert('Su Nombre es: ' +this.nombre+' '+this.apellido);

        localStorage.setItem('nombre', this.nombre);
        localStorage.setItem('apellido', this.apellido);
        localStorage.setItem('selectedOption', this.selectedOption);
        localStorage.setItem('selectedDate', this.selectedDate);

      }
  }

  limpiar(){
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = '';

    localStorage.clear();
  }

  navegarAMiPagina(){
    this.router.navigate(['/tabs']);
  }

  /*async presentToast(){
    const toast = await this.toastController.create({
      message : 'este es un mensaje de toast',
      duration: 2000

    });
    toast.present();
  }*/

}
