import { Routes } from '@angular/router';
import { HolaComponent } from './pages/hola/hola.component';
import { ChaoComponent } from './pages/chao/chao.component';

export const routes: Routes = [
    {path: 'hola', component: HolaComponent},
    {path: 'chao', component: ChaoComponent},
    {path: '', redirectTo: 'hola', pathMatch: 'full' }
];