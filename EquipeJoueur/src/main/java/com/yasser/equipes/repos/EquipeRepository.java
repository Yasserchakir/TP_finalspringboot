package com.yasser.equipes.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yasser.equipes.entites.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe, Long> {
}