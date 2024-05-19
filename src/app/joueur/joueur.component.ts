import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';  // Update the import statement
import { AuthService } from '../services/auth.service';
import { JoueurService } from '../services/joueur.service';  // Update the service import

@Component({
  selector: 'app-joueurs',  // Update the selector
  templateUrl: './joueur.component.html'  // Update the template URL
})
export class JoueursComponent implements OnInit {  // Update the class name

  joueurs?: Joueur[]; // A list of joueurs

  constructor(private JoueurService: JoueurService,  // Update the service variable and type
              public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerJoueurs();  // Update the method call
  }

  chargerJoueurs(){  // Update the method name
    this.JoueurService.listeJoueurs().subscribe(joueurs => {  // Update the service method call and variable names
      console.log(joueurs);
      this.joueurs = joueurs;
    });
  }

  supprimerJoueur(j: Joueur) {  // Update the method name and parameter type
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.JoueurService.supprimerJoueur(j.idJoueur).subscribe(() => {  // Update the service method call and parameter
        console.log("joueur supprimé");
        this.chargerJoueurs();  // Update the method call
      });
  }
}
