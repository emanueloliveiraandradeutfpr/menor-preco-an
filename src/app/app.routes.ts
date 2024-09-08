import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { AccountComponent } from './components/account/account.component';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: MyListComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'result/:searchTerm',
    component: ResultComponent,
  },
];
