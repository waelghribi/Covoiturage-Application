import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Ride {
  id: number;
  departureCity: string;
  destinationCity: string;
  departureDate: Date;
  departureTime: string;
  price: number;
  availableSeats: number;
  driverName: string;
  driverPhoto: string;
  driverRating: number;
  smokingAllowed: boolean;
  petsAllowed: boolean;
  rating: number;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  quickSearchForm: FormGroup;
  rides: Ride[] = [];
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];
  searchFilters = {
    date: '',
    maxPrice: null,
    seats: 1,
    timeOfDay: 'Matin (6h-12h)'
  };

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      passengers: [1, [Validators.required, Validators.min(1)]]
    });

    this.quickSearchForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load initial rides if needed
    this.generatePages();
  }

  onSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }
    // TODO: Implement search functionality
  }

  onQuickSearch(): void {
    if (this.quickSearchForm.invalid) {
      return;
    }
    // TODO: Implement quick search functionality
  }

  generatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // TODO: Load rides for the selected page
    }
  }

  applyFilters(): void {
    console.log('Applying filters:', this.searchFilters);
    // TODO: Implement filter logic
  }

  bookRide(rideId: number): void {
    console.log('Booking ride:', rideId);
    // TODO: Implement booking logic
  }
}
