import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { SystemComponent } from './system.component';
import { EdiFileAutoGeneratorComponent } from './edi-file-auto-generator/edi-file-auto-generator.component';
import { FileSortingComponent } from './file-sorting/file-sorting.component';
import { EdiListComponent } from './edi-file-list/edi-file-list.component';
import { UploadXmlComponent } from './xml/upload-xml/upload-xml.component';
import { ResultXmlComponent } from './xml/result-xml/result-xml.component';
import { FilecompareComponent} from './file-compare/file-compare-upload/file-compare-upload.component';
import { FileCompareDisplayComponent } from './file-compare/file-compare-display/file-compare-display.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent, // The layout component for the system
    children: [
      
      { path: 'edi-generator', component: EdiFileAutoGeneratorComponent},
      { path: 'edi-file-list', component: EdiListComponent},
      { path: 'file-sorting', component: FileSortingComponent},
      {path: 'upload-xml', component:UploadXmlComponent},
      {path: 'result-xml', component:ResultXmlComponent},
      { path: 'file-compare-upload', component: FilecompareComponent }, // Route for Task 1
      { path: 'file-compare-display', component: FileCompareDisplayComponent },
      
      // { path: 'task2', component: Task2Component }, // Route for Task 2
      { path: '', redirectTo: 'task1', pathMatch: 'full' }, // Default to Task 1
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}