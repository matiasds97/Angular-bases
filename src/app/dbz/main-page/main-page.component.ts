import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 120000,
    },
    {
      nombre: 'Vegeta',
      poder: 100000,
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje): void {
    this.personajes.push(argumento);
  }

}
