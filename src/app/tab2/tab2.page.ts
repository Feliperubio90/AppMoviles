import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  nombre2: any='Informacion:';

  nombre: any='';
  apellido: any='';

  constructor() { }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
  }

}
