import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { SystemComponent } from './system.component';
import { EdiFileAutoGeneratorComponent } from './edi-file-auto-generator/edi-file-auto-generator.component';
import { FileSortingComponent } from './file-sorting/file-sorting.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent, // The layout component for the system
    children: [
      { path: 'edi-generator', component: EdiFileAutoGeneratorComponent},
      { path: 'file-sorting', component: FileSortingComponent},
      // {path: 'system', component:SystemComponent},
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
