package com.yasser.equipes.entites;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Equipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String nom;

    @Column(length = 255, nullable = false)
    private String localisation;

    @Column(length = 255, nullable = false)
    private String stadeDomiciel;

    @Column(length = 255, nullable = false)
    private String entraineur;

    @Column(length = 255, nullable = false)
    private String capitaine;

    @Column(nullable = false)
    private Integer formation;

    @Column(length = 255, nullable = false)
    private String styleJeu;

    @Column(length = 255, nullable = false)
    private String tailleEquipe;

    @Column(length = 255, nullable = false)
    private String lique;

    @Column(nullable = false)
    private Integer budget;

    @Column(length = 255, nullable = false)
    private String realisations;

    @OneToMany(mappedBy = "relationavecEquipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Joueur> joueurs = new ArrayList<>();
	public Equipe(String string, String string2) {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getLocalisation() {
		return localisation;
	}

	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}

	public String getStadeDomiciel() {
		return stadeDomiciel;
	}

	public void setStadeDomiciel(String stadeDomiciel) {
		this.stadeDomiciel = stadeDomiciel;
	}

	public String getEntraineur() {
		return entraineur;
	}

	public void setEntraineur(String entraineur) {
		this.entraineur = entraineur;
	}

	public String getCapitaine() {
		return capitaine;
	}

	public void setCapitaine(String capitaine) {
		this.capitaine = capitaine;
	}

	public Integer getFormation() {
		return formation;
	}

	public void setFormation(Integer formation) {
		this.formation = formation;
	}

	public String getStyleJeu() {
		return styleJeu;
	}

	public void setStyleJeu(String styleJeu) {
		this.styleJeu = styleJeu;
	}

	public String getTailleEquipe() {
		return tailleEquipe;
	}

	public void setTailleEquipe(String tailleEquipe) {
		this.tailleEquipe = tailleEquipe;
	}

	public String getLique() {
		return lique;
	}

	public void setLique(String lique) {
		this.lique = lique;
	}

	public Integer getBudget() {
		return budget;
	}

	public void setBudget(Integer budget) {
		this.budget = budget;
	}

	public String getRealisations() {
		return realisations;
	}

	public void setRealisations(String realisations) {
		this.realisations = realisations;
	}

	public List<Joueur> getJoueurs() {
		return joueurs;
	}

	public void setJoueurs(List<Joueur> joueurs) {
		this.joueurs = joueurs;
	}

	public String getDescription() {
		// TODO Auto-generated method stub
		return null;
	}

    
}
