import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes'; // Import routes from app.routes.ts

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },  // Default route
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),  // Lazy load Auth module
  },
  { path: '**', redirectTo: 'auth/login' },  // Catch-all route for any undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use appRoutes defined earlier
  exports: [RouterModule],
})
export class AppRoutingModule {}
