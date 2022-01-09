import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroeBorrado: string = "";

    heroes: string[] = [
      'Spider Man',
      'Iron Man',
      'Dr. Strange',
      'Capitán América'
    ];

    borrarHeroe(): void {
      const heroesBorrados = this.heroes.splice(this.heroes.length - 1, 1);
      this.heroeBorrado = heroesBorrados[0]
    }
}
