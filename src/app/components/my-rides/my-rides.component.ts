import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ride {
  id: number;
  departureDate: Date;
  departureCity: string;
  destinationCity: string;
  availableSeats: number;
  totalSeats: number;
  pricePerSeat: number;
  status: string;
  driverName?: string;
  driverPhoto?: string;
}

@Component({
  selector: 'app-my-rides',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.scss']
})
export class MyRidesComponent implements OnInit {
  // Sample data - replace with actual API calls
  offeredRides: Ride[] = [
    {
      id: 1,
      departureDate: new Date('2024-03-20T08:00:00'),
      departureCity: 'Tunis',
      destinationCity: 'Sousse',
      availableSeats: 2,
      totalSeats: 4,
      pricePerSeat: 15,
      status: 'active'
    },
    {
      id: 2,
      departureDate: new Date('2024-03-22T10:00:00'),
      departureCity: 'Sfax',
      destinationCity: 'Gabes',
      availableSeats: 1,
      totalSeats: 3,
      pricePerSeat: 20,
      status: 'pending'
    }
  ];

  bookedRides: Ride[] = [
    {
      id: 3,
      departureDate: new Date('2024-03-21T09:00:00'),
      departureCity: 'Nabeul',
      destinationCity: 'Hammamet',
      availableSeats: 1,
      totalSeats: 3,
      pricePerSeat: 10,
      status: 'confirmed',
      driverName: 'John Doe',
      driverPhoto: 'assets/images/user-1.jpg'
    }
  ];

  // Statistics
  totalOfferedRides: number = 0;
  totalBookedRides: number = 0;
  totalSavings: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateStatistics();
  }

  private calculateStatistics(): void {
    this.totalOfferedRides = this.offeredRides.length;
    this.totalBookedRides = this.bookedRides.length;
    this.totalSavings = this.bookedRides.reduce((total, ride) => total + ride.pricePerSeat, 0);
  }

  editRide(ride: Ride): void {
    console.log('Editing ride:', ride);
    // Implement edit functionality
  }

  cancelRide(ride: Ride): void {
    console.log('Cancelling ride:', ride);
    // Implement cancel functionality
  }

  viewRideDetails(ride: Ride): void {
    console.log('Viewing ride details:', ride);
    // Implement view details functionality
  }

  cancelBooking(ride: Ride): void {
    console.log('Cancelling booking:', ride);
    // Implement cancel booking functionality
  }
}
