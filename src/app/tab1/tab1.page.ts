import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

/*interpolacion*/
export class Tab1Page implements OnInit {
  nombre1: any='Acerca de:';

  nombre: any='';
  apellido: any='';

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
  }

  goToApiPage(){
    this.router.navigate(['/api'])
  }

  goToCameraPage(){
    this.router.navigate(['/camera']);
  }

  viewLocation(){
    this.router.navigate(['/map'])
  }

}
