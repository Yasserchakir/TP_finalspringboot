import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';  // Updated component name
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeJoueursComponent } from './liste-equipes/liste-equipes.component';  // Updated component name
import { LoginComponent } from './login/login.component';
import { JoueurGuard } from './joueur.guard';  // Updated guard name
import { JoueursComponent } from './joueur/joueur.component';  // Updated component name
import { RechercheParJoueurComponent } from './recherche-par-equipe/recherche-par-equipe.component';  // Updated component name
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';  // Updated component name

const routes: Routes = [
  { path: "joueurs", component: JoueursComponent },  // Updated route path and component
  { path: "add-joueur", component: AddJoueurComponent, canActivate: [JoueurGuard] },  // Updated route path, component, and guard
  { path: "updateJoueur/:id", component: UpdateJoueurComponent },  // Updated route path and component
  { path: "rechercheParEquipe", component: RechercheParJoueurComponent },  // Updated route path and component
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "listeEquipes", component: ListeJoueursComponent },  // Updated route path and component
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "joueurs", pathMatch: "full" }  // Updated default route path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
