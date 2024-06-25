import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  apiData: any[] = [];
  characters: any[] = [];
  error: boolean = false;  // Variable para el manejo de errores

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchApiData();
    this.fetchCharacters();
    // this.obtenerDatosUnidad();
  }

  fetchApiData(){
    this.http.get('https://swapi.dev/api/').subscribe(
      (response: any) => {
        console.log(response);
        this.apiData = this.transformData(response);
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
        this.error = true;  // Manejo de errores
      }
    );
  }

  transformData(data: any): any[] {
    const result = [];
    for (const key in data) {
      if (data.hasOwnProperty(key) && typeof data[key] === 'object') {
        result.push(data[key]);
      }
    }
    return result;
  }

  fetchCharacters() {
    const apiUrl = 'https://swapi.dev/api/people/';

    this.http.get<any>(apiUrl).subscribe(
      (data: any) => {
        this.characters = data.results;
        console.log(this.characters);
      },
      (error) => {
        console.error('Error al obtener datos de personajes:', error);
        this.error = true;  // Manejo de errores
      }
    );
  }

  /*obtenerDatosUnidad() {
    const apiUrl = 'https://mindicador.cl/api/dolar';
    this.http.get<any>(apiUrl).subscribe(
      data => {
        this.datosUnidad = data;
      },
      error => {
        console.error('Error al obtener datos del dólar:', error);
      }
    );
  }*/
}
