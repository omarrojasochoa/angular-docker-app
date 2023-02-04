import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SumaComponent } from './components/suma/suma.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UsersComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'devops',
    component: SumaComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
