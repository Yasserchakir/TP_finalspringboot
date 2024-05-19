import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../model/equipe.model'; // Changed from Categorie to Equipe

@Component({
  selector: 'app-update-equipe', // Changed from 'app-update-categorie' to 'app-update-equipe'
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {

  @Input()
  equipe!: Equipe; // Changed from Categorie to Equipe

  @Input()
  ajout!: boolean;

  @Output() 
  equipeUpdated = new EventEmitter<Equipe>(); // Changed from Categorie to Equipe

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateEquipe ", this.equipe);
  }

  saveEquipe() {
    this.equipeUpdated.emit(this.equipe);
  }
}
