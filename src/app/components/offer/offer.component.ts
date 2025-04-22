import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class OfferComponent implements OnInit {
  offerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.offerForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      vehicle: ['', Validators.required],
      availableSeats: ['', [Validators.required, Validators.min(1), Validators.max(7)]],
      pricePerSeat: ['', [Validators.required, Validators.min(0)]],
      smokingAllowed: [false],
      petsAllowed: [false],
      additionalInfo: ['']
    });
  }

  ngOnInit(): void {
    // Animation classes
    setTimeout(() => {
      const elements = document.getElementsByClassName('ftco-animate');
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('ftco-animated');
      }
    }, 200);

    // Load user's vehicles if needed
  }

  // Getter for easy access to form fields
  get f() { return this.offerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.offerForm.invalid) {
      return;
    }

    this.loading = true;
    // TODO: Implement service call to create ride
    setTimeout(() => {
      this.loading = false;
      // Show success message
    }, 1000);
  }

  // Reset form
  resetForm() {
    this.submitted = false;
    this.offerForm.reset();
  }
}
