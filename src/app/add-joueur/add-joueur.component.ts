import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';  // Update the import statement
import { Joueur } from '../model/joueur.model';  // Update the import statement
import { JoueurService } from '../services/joueur.service';  // Update the service import

@Component({
  selector: 'app-add-joueur',  
  templateUrl: './add-joueur.component.html'  
})
export class AddJoueurComponent implements OnInit {  

  newJoueur = new Joueur();  
  equipes!: Equipe[];
  newIdEquipe!: number;
  newEquipe!: Equipe;

  constructor(private JoueurService: JoueurService,  
              private router: Router) { }

              ngOnInit(): void {
                this.JoueurService.listeEquipes().subscribe((equipes: Equipe[]) => {
                    this.equipes = equipes;
                    console.log(equipes);
                });
            }
            
            


  addJoueur(){ 
    this.newJoueur.relationavecEquipe = this.equipes.find(equipe => equipe.id == this.newIdEquipe)!;
    this.JoueurService.ajouterJoueur(this.newJoueur)  
                      .subscribe((joueur: any) => {  
                      console.log(joueur);  
                      this.router.navigate(['joueurs']);  
                      }); 
  }
}
