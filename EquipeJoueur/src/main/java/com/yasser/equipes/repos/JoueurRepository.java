package com.yasser.equipes.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yasser.equipes.entites.Joueur;

public interface JoueurRepository extends JpaRepository<Joueur, Long> {
}