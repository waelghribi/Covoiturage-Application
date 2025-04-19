import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-conducteur-component',
  standalone: false,
  templateUrl: './liste-conducteur-component.component.html',
  styleUrl: './liste-conducteur-component.component.css'
})
export class ListeConducteurComponentComponent {
   // Modèle pour le profil du conducteur
   conducteur = {
    nom: '',
    email: '',
    telephone: '',
    vehicule: {
      marque: '',
      modele: '',
      annee: '',
      plaqueImmatriculation: ''
    }
  };

  // Méthode pour enregistrer ou soumettre le profil
  enregistrerProfil() {
    // Vous pouvez ajouter ici des fonctionnalités pour sauvegarder les données du profil
    console.log('Profil enregistré : ', this.conducteur);
  }

}
