import { Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    loadComponent: () => import('@routes/books/books.component').then((c) => c.BooksComponent)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
