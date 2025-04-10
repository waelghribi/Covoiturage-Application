import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-Component/home.component';
import { TrajetComponent } from './trajetComponent/trajet.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'trajets', component: TrajetComponent},
  {path:'register', component: RegisterComponentComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
