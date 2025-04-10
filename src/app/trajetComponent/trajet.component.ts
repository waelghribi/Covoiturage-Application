import { Component } from '@angular/core';

@Component({
  selector: 'app-trajet',
  standalone: false,
  templateUrl: './trajet.component.html',
  styleUrl: './trajet.component.css'
})
export class TrajetComponent {

  villes: string[] = [
    'Tunis', 'Sfax', 'Sousse', 'Gabès', 'Nabeul',
    'Bizerte', 'Kairouan', 'Monastir', 'Mahdia', 'Tozeur'
  ];

  nouveauTrajet = {
    depart: '',
    destination: '',
    date: ''
  };

  trajets: any[] = [];

  ajouterTrajet() {
    if (this.nouveauTrajet.depart && this.nouveauTrajet.destination && this.nouveauTrajet.date) {
      this.trajets.push({ ...this.nouveauTrajet });
      this.nouveauTrajet = { depart: '', destination: '', date: '' };
    }
  }

}
