import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent,
        children: [
          { path: 'task1', component: Task1Component },
          { path: 'task2', component: Task2Component },
        ],
      },
    ]),
  ],
})
export class SystemModule {}
