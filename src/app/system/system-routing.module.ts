import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'task1', component: Task1Component },
      { path: 'task2', component: Task2Component },
    ],
  },
  { path: '**', redirectTo: '' },  // Catch-all route to prevent 404 error
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
