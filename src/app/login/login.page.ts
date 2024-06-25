import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

 

  constructor(private alertController:AlertController, private router:Router,  private dbService: DbserviceService) { }
  usuario: any="";
  password: string="";


  ngOnInit() {
  }

  /*login(){
    if (this.usuario.trim() == 'Felipe' && this.password.trim() == '1234'){
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      }
      this.router.navigate(['/home'], NavigationExtras);
    }
    else{
      this.presentAlert('Usuario y/o Contraseña Incorrecta');
    }*/

    



    
    async presentAlert(message: string){
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: message,
        buttons: ['OK']
      });

      await alert.present();
  }

  async login() {
    const usuario = await this.dbService.validarUsuario(this.usuario, this.password);
    if (usuario) {
      // Usuario válido, realizar acciones de inicio de sesión
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      } 
      this.router.navigate(['/home'],NavigationExtras);
    } else {
      // Usuario inválido, mostrar mensaje de error
      this.presentAlert('Credenciales inválidas');
    }
  }

  crear_cuenta(){
    this.router.navigate(['/registro']);
  }

}
