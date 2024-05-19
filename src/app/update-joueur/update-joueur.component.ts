import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: []
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur!: Joueur;
  equipes: Equipe[] = [];
  updatedEquipeId: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private joueurService: JoueurService
  ) {}

  ngOnInit(): void {
    this.joueurService.listeEquipes().subscribe(equipes => {
      this.equipes = equipes._embedded.Equipes;
      console.log(equipes);
    });

    this.joueurService
      .consulterJoueur(this.activatedRoute.snapshot.params['id'])
      .subscribe(joueur => {
        this.currentJoueur = joueur;
        this.updatedEquipeId = this.currentJoueur?.equipe?.idEquipe ?? defaultValue;
      });
  }

  updateJoueur(): void {
    if (this.currentJoueur && this.updatedEquipeId !== undefined) {
      const selectedEquipe = this.equipes.find(
        equipe => equipe.idEquipe === this.updatedEquipeId
      );
      if (selectedEquipe) {
        this.currentJoueur.equipe = selectedEquipe;
        this.joueurService.updateJoueur(this.currentJoueur).subscribe(() => {
          this.router.navigate(['joueurs']);
        });
      } else {
        console.error('Selected equipe not found.');
      }
    } else {
      console.error('Current joueur or updatedEquipeId is undefined.');
    }
  }
}
