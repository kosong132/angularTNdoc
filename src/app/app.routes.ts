import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Default route
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule),
  },
  { path: '**', redirectTo: 'auth/login' }, // Catch-all route
];


/*import { Routes } from '@angular/router';
import { HomeComponent } from './auth/login/login.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { EdicompareComponent } from './components/edicompare/edicompare.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';
export const routes: Routes = [
  // Route to the Home component
  { path: 'home', component: HomeComponent },

  // Route to the File Upload component
  { path: 'upload', component: FileUploadComponent },

  // Route to the EDI Compare component
  { path: 'edicompare', component: EdicompareComponent },

  { path: 'preview', component: FilePreviewComponent },
  //{ path: 'preview', component: PreviewComponent },

  // // Default route: Redirect to 'home' if no path is specified
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Wildcard route: Add a "not found" page or redirect to 'home'
  { path: '**', redirectTo: '/home' },
];*/
