import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model'; // Updated import statement
import { Joueur } from '../model/joueur.model'; // Updated import statement
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { equipeWrapper } from '../model/equipeWrapped.model'; // Corrected the file name typo

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JoueurService { // Updated class name
  apiURL: string = 'http://localhost:9090/joueurs/api'; // Updated API URL
  apiURLEquipe: string = 'http://localhost:9090/joueurs/equipe'; // Updated API URL

  joueurs: Joueur[]; // A list of joueurs

  constructor(private http: HttpClient) {
    this.joueurs = [
      { idJoueur: 1, nomJoueur: "Player 1", equipe: { idEquipe: 1, nomEquipe: "Team A"} },
      { idJoueur: 2, nomJoueur: "Player 2", equipe: { idEquipe: 2, nomEquipe: "Team B"} },
      { idJoueur: 3, nomJoueur: "Player 3", equipe: { idEquipe: 3, nomEquipe: "Team C"} }
    ];
  }

  listeJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiURL);
  }

  ajouterJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.apiURL, joueur, httpOptions);
  }

  supprimerJoueur(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterJoueur(id: number): Observable<Joueur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Joueur>(url);
  }

  trierJoueurs() {
    this.joueurs = this.joueurs.sort((j1, j2) => {
      if (j1.idJoueur > j2.idJoueur) {
        return 1;
      }
      if (j1.idJoueur < j2.idJoueur) {
        return -1;
      }
      return 0;
    });
  }

  updateJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(this.apiURL, joueur, httpOptions);
  }

  listeEquipes(): Observable<equipeWrapper> {
    return this.http.get<equipeWrapper>(this.apiURLEquipe);
  }

  rechercherParEquipe(idEquipe: number): Observable<Joueur[]> {
    const url = `${this.apiURL}/joueursEquipe/${idEquipe}`;
    return this.http.get<Joueur[]>(url);
  }

  rechercherParNom(nom: string): Observable<Joueur[]> {
    const url = `${this.apiURL}/joueursByName/${nom}`;
    return this.http.get<Joueur[]>(url);
  }

  ajouterEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiURLEquipe, equipe, httpOptions);
  }
}
