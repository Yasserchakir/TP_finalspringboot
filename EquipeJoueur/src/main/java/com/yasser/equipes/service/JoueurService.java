package com.yasser.equipes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yasser.equipes.entites.Equipe;
import com.yasser.equipes.entites.Joueur;
import com.yasser.equipes.repos.JoueurRepository;

@Service
public class JoueurService {
    @Autowired
    private JoueurRepository joueurRepository;

    public List<Joueur> findAll() {
        return joueurRepository.findAll();
    }

    public Joueur save(Joueur joueur) {
        return joueurRepository.save(joueur);
    }

    public void delete(Long id) {
        joueurRepository.deleteById(id);
    }

	 public Joueur saveJoueur(Joueur joueur) {
        return joueurRepository.save(joueur);
    }
}