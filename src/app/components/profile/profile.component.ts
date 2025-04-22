import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

interface User {
  photoUrl?: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  rating: number;
  reviewsCount: number;
  ridesAsDriver: number;
  ridesAsPassenger: number;
  totalKm: number;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
}

interface Review {
  reviewerPhoto: string;
  reviewerName: string;
  date: Date;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePipe]
})
export class ProfileComponent implements OnInit {
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    createdAt: new Date(),
    rating: 4.5,
    reviewsCount: 12,
    ridesAsDriver: 25,
    ridesAsPassenger: 15,
    totalKm: 1200
  };

  vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      color: 'Blue'
    }
  ];

  reviews: Review[] = [
    {
      reviewerPhoto: 'assets/images/default-avatar.jpg',
      reviewerName: 'Jane Smith',
      date: new Date(),
      rating: 5,
      comment: 'Great driver, very punctual and friendly!'
    }
  ];

  profileForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
    // Load user data from service
    this.loadUserData();
  }

  loadUserData(): void {
    // TODO: Implement service call to load user data
    this.profileForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: 'john.doe@example.com',
      phone: '+1234567890',
      bio: 'I love carpooling!'
    });
  }

  updateProfile(): void {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    // TODO: Implement service call to update profile
    setTimeout(() => {
      this.loading = false;
      // Show success message
    }, 1000);
  }

  updatePhoto(): void {
    // TODO: Implement photo upload functionality
  }

  addVehicle(): void {
    // TODO: Implement add vehicle functionality
  }

  editVehicle(vehicle: Vehicle): void {
    // TODO: Implement edit vehicle functionality
  }

  deleteVehicle(vehicleId: number): void {
    // TODO: Implement delete vehicle functionality
  }

  // Convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }
}
