import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [CommonModule, SystemRoutingModule, FormsModule, ReactiveFormsModule],
})
export class SystemModule {}
