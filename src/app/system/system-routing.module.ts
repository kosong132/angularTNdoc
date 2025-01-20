import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent, // The layout component for the system
    children: [
      { path: 'task1', component: Task1Component }, // Route for Task 1
      { path: 'task2', component: Task2Component }, // Route for Task 2
      { path: '', redirectTo: 'task1', pathMatch: 'full' }, // Default to Task 1
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { Task1Component } from './task1/task1.component';
// import { Task2Component } from './task2/task2.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: SidebarComponent,
//     children: [
//       { path: 'task1', component: Task1Component },
//       { path: 'task2', component: Task2Component },
//     ],
//   },
//   { path: '**', redirectTo: '' },  // Catch-all route to prevent 404 error
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class SystemRoutingModule {}
