import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model'; // Remplacer Categorie par Equipe
import { JoueurService } from '../services/joueur.service'; // Remplacer BateauService par JoueurService
import { Joueur } from '../model/joueur.model';

@Component({
  selector: 'app-liste-joueurs', // Remplacer 'app-liste-categories' par 'app-liste-joueurs'
  templateUrl: './liste-equipes.component.html',
  styles: [
  ]
})
export class ListeJoueursComponent implements OnInit {
equipes: any;
updateEquipe(_t12: any) {
throw new Error('Method not implemented.');
} // Remplacer ListeCategoriesComponent par ListeJoueursComponent

  joueurs!: Joueur[]; // Remplacer categories par joueurs

  ajout:boolean=true;

  updatedJoueur:Joueur = {
    "idJoueur": 0, "nomJoueur": "",
    relationavecEquipe: new Equipe,
    id: undefined,
    nom: undefined,
    age: undefined,
    dateNaissance: undefined,
    nationalite: undefined,
    position: undefined,
    equipe: new Equipe,
    prixJoueur: undefined,
    dateCreation: ''
  }; // Remplacer updatedCat par updatedJoueur

  constructor(private joueurService: JoueurService) { } // Remplacer bateauService par joueurService

  ngOnInit(): void {  
    this.chargerJoueurs(); // Remplacer chargerCategories par chargerJoueurs
  }

  chargerJoueurs() {
    this.joueurService.listeJoueurs().subscribe((joueurs: Joueur[]): void => {
      this.joueurs = joueurs;
      console.log(joueurs);
    });
  }
  

  joueurUpdated(joueur: Joueur) {
    console.log("joueur reçu du composant updateJoueur ", joueur);
    this.joueurService.ajouterJoueur(joueur).subscribe(() => this.chargerJoueurs());
  }
  

  updateJoueur(joueur: Joueur) {
    this.updatedJoueur = { ...joueur }; // Assurez-vous que updatedJoueur est initialisé avec une copie de joueur
    this.ajout = false;
  }
  
  
  
  
  
  
  
  
  
  
}
