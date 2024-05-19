import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueur/joueur.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { ListeJoueursComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { UpdateJoueurComponent } from '../path/to/update-joueur.component';  // Adjust the path

@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    LoginComponent,
    ListeJoueursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
