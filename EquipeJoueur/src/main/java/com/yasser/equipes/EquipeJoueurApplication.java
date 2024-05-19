package com.yasser.equipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import com.yasser.equipes.entites.Equipe;
import com.yasser.equipes.entites.Joueur;
import com.yasser.equipes.repos.EquipeRepository;
import com.yasser.equipes.repos.JoueurRepository;


@Service
public class EquipeJoueurApplication implements CommandLineRunner {

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private JoueurRepository joueurRepository;

    @Override
    public void run(String... args) throws Exception {
        // Créer et ajouter une équipe
        Equipe equipe = new Equipe(null, null);
        equipe.setNom("Équipe de test");
        equipeRepository.save(equipe);

        // Créer et ajouter un joueur
        Joueur joueur = new Joueur(null, null, equipe);
        joueur.setNom("John Doe");
        joueur.setEquipe(equipe); // Définir l'équipe du joueur
        joueurRepository.save(joueur);
    }
}
