import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: false, // Ne pas utiliser standalone ici
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: any;
  private clickedMarker: any;

  @Output() pointSelectionne = new EventEmitter<{ lat: number, lng: number }>();

  ngOnInit(): void {
    this.initMap();
    this.localiserUtilisateur();
    this.activerClickMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.8065, 10.1815], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private localiserUtilisateur(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.map.setView([lat, lng], 13);
        L.marker([lat, lng]).addTo(this.map).bindPopup('Vous êtes ici 📍').openPopup();
      });
    }
  }

  private activerClickMap(): void {
    this.map.on('click', (e: any) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      if (this.clickedMarker) this.map.removeLayer(this.clickedMarker);

      this.clickedMarker = L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup(`Point sélectionné :<br>Latitude: ${lat.toFixed(4)}<br>Longitude: ${lng.toFixed(4)}`)
        .openPopup();

      // 🟢 Émettre la position vers le composant parent
      this.pointSelectionne.emit({ lat, lng });
    });
  }
}
