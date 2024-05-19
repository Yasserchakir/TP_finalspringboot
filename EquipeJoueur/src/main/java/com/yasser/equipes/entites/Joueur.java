package com.yasser.equipes.entites;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Joueur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String nom;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;

    @Column(length = 255, nullable = false)
    private String nationalite;

    @Column(length = 255, nullable = false)
    private String position;

    @Column(nullable = false)
    private Integer numeroMaillot;

    @Column(length = 255, nullable = false)
    private String pied;

    public Joueur(String string, String string2, Equipe equipe) {
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

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getNationalite() {
		return nationalite;
	}

	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Integer getNumeroMaillot() {
		return numeroMaillot;
	}

	public void setNumeroMaillot(Integer numeroMaillot) {
		this.numeroMaillot = numeroMaillot;
	}

	public String getPied() {
		return pied;
	}

	public void setPied(String pied) {
		this.pied = pied;
	}

	public String getStatutContrat() {
		return statutContrat;
	}

	public void setStatutContrat(String statutContrat) {
		this.statutContrat = statutContrat;
	}

	public Integer getNiveauCompetence() {
		return niveauCompetence;
	}

	public void setNiveauCompetence(Integer niveauCompetence) {
		this.niveauCompetence = niveauCompetence;
	}

	public Equipe getRelationavecEquipe() {
		return relationavecEquipe;
	}

	public void setRelationavecEquipe(Equipe relationavecEquipe) {
		this.relationavecEquipe = relationavecEquipe;
	}

	@Column(length = 255, nullable = false)
    private String statutContrat;

    @Column(nullable = false)
    private Integer niveauCompetence;

    @ManyToOne
    @JoinColumn(name = "equipe_id", nullable = false)
    private Equipe relationavecEquipe;

	public void setEquipe(Equipe equipe) {
		// TODO Auto-generated method stub
		
	}

	

}
