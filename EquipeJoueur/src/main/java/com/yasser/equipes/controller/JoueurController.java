package com.yasser.equipes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yasser.equipes.entites.Joueur;
import com.yasser.equipes.service.JoueurService;

@RestController
@RequestMapping("/joueurs")
public class JoueurController {
    @Autowired
    private JoueurService joueurService;

    @GetMapping
    public List<Joueur> getAllJoueurs() {
        return joueurService.findAll();
    }

    @PostMapping
    public Joueur createJoueur(@RequestBody Joueur joueur) {
        return joueurService.save(joueur);
    }

    @DeleteMapping("/{id}")
    public void deleteJoueur(@PathVariable Long id) {
        joueurService.delete(id);
    }
}