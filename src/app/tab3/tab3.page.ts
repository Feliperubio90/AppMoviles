import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  nombre3: any='Productos:';
  nombre: any='';
  apellido: any='';

  constructor() { }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
    
  }

}