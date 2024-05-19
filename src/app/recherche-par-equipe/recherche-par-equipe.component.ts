import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';  // Updated import statement
import { Joueur } from '../model/joueur.model';  // Updated import statement
import { JoueursComponent } from '../joueur/joueur.component';  // Updated import statement
import { JoueurService } from '../services/joueur.service';  // Updated service import

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-equipe.component.html',
  styles: [
  ]
})
export class RechercheParJoueurComponent implements OnInit {
  IdCategorie!: number;
  equipes!: Equipe[];  // Updated variable type
  joueurs!: Joueur[];  // Updated variable type

  constructor(private joueurService: JoueurService) { }  // Updated service variable and type

  ngOnInit(): void {
    this.joueurService.listeEquipes().
      subscribe((cats: { _embedded: { equipes: Equipe[]; }; }): void => {
        this.equipes = cats._embedded.equipes;  // Updated variable name
        console.log(cats);
      });
  }

  onChange() {
    this.joueurService.rechercherParEquipe(this.IdCategorie).
      subscribe((joueurs: Joueur[]) => {
        this.joueurs = joueurs;  // Updated variable name
      });
  }
}
