package com.yasser.equipes;

import java.util.Date;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yasser.equipes.entites.Equipe;
import com.yasser.equipes.entites.Joueur;
import com.yasser.equipes.repos.EquipeRepository;
import com.yasser.equipes.repos.JoueurRepository;

@SpringBootTest
class EquipeJoueurApplicationTests {

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private JoueurRepository joueurRepository;

    @Test
    public void testCreateEquipeAndJoueurs() {
        // Création d'une équipe
        Equipe equipe = new Equipe("Nom de l'équipe", "Description de l'équipe");
        equipeRepository.save(equipe);

        // Création de joueurs associés à l'équipe
        Joueur joueur1 = new Joueur(null, null, equipe);
        joueur1.setNom("Nom du joueur 1");
        joueur1.setAge(25);
        joueur1.setDateNaissance(new Date());
        joueur1.setNationalite("Nationalité du joueur 1");
        joueur1.setPosition("Position du joueur 1");
        joueur1.setNumeroMaillot(10);
        joueur1.setPied("Pied préféré du joueur 1");
        joueur1.setStatutContrat("Statut du contrat du joueur 1");
        joueur1.setNiveauCompetence(8);
        joueur1.setRelationavecEquipe(equipe);

        joueurRepository.save(joueur1);

        // Vous pouvez créer d'autres joueurs de la même manière si nécessaire
    }

    @Test
    public void testFindEquipeAndJoueurs() {
    	 Equipe equipe = equipeRepository.findById(1L).orElse(null);
         assert equipe != null;

         System.out.println("Équipe : " + equipe.getNom() + ", Description : " + equipe.getDescription());
         System.out.println("Joueurs : ");
         for (Joueur joueur : equipe.getJoueurs()) {
             System.out.println("Nom : " + joueur.getNom() + ", Position : " + joueur.getPosition());    
             }
    }
    @Test
    void contextLoads() {
    }
}
