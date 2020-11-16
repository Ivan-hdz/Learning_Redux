import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => {
      return import('./login/login.module').then((m) => m.LoginModule);
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => {
      return import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
