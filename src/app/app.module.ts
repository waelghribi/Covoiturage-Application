import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-Component/home.component';
import { TrajetComponent } from './trajetComponent/trajet.component';
import { ConducteurComponent } from './conducteurComponent/conducteur.component';
import { ListeTrajetComponentComponent } from './liste-trajet-component/liste-trajet-component.component';
import { ListeConducteurComponentComponent } from './liste-conducteur-component/liste-conducteur-component.component';
import { DashboardAdminComponentComponent } from './dashboard-admin-component/dashboard-admin-component.component';
import { DashboardClientComponentComponent } from './dashboard-client-component/dashboard-client-component.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { MessagerieComponentComponent } from './messagerie-component/messagerie-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrajetComponent,
    ConducteurComponent,
    ListeTrajetComponentComponent,
    ListeConducteurComponentComponent,
    DashboardAdminComponentComponent,
    DashboardClientComponentComponent,
    PaymentComponentComponent,
    MessagerieComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
