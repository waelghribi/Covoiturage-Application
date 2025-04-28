import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      icon: '💰',
      title: 'Économique',
      description: 'Partagez les frais de voyage et réduisez vos dépenses de transport.'
    },
    {
      icon: '🌱',
      title: 'Écologique',
      description: 'Réduisez votre empreinte carbone en partageant votre véhicule.'
    },
    {
      icon: '👥',
      title: 'Communautaire',
      description: 'Rencontrez des personnes partageant les mêmes trajets que vous.'
    }
  ];
}