import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  personajes: Personaje[] = [];

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}