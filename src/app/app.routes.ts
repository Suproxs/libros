import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'details/:bookId', component: BookDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];