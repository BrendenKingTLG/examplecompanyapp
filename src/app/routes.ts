import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routerConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent }
];

export default routerConfig