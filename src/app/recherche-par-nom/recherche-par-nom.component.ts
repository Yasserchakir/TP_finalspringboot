import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';  // Changement de Bateau à Joueur
import { JoueurService } from '../services/joueur.service';  // Changement de BateauService à JoueurService

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomJoueur!: string;  
  joueurs!: Joueur[];  // Changement de Bateau à Joueur
  allJoueurs!: Joueur[];  // Changement de Bateau à Joueur
  searchTerm!: string;
  
  constructor(private joueurService : JoueurService) { }  

  ngOnInit(): void {
    this.joueurService.listeJoueurs().subscribe((joueurs: Joueur[]) => { 
      console.log(joueurs);
      this.joueurs = joueurs;  
      this.allJoueurs = joueurs; 
    });
  }

  rechercherJoueurs() {  
    this.joueurService.rechercherParNom(this.nomJoueur).subscribe((joueurs: Joueur[]) => { 
      console.log(joueurs);
      this.joueurs = joueurs;
    });
  }

  onKeyUp(filterText: string) {
    this.joueurs = this.allJoueurs.filter(joueur =>
      joueur.nomJoueur.toLowerCase().includes(filterText)  
    );
  }
}
