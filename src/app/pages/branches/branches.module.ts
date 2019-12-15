import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchesPageRoutingModule } from './branches-routing.module';

import { BranchesPage } from './branches.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BranchesPageRoutingModule
  ],
  declarations: [BranchesPage]
})
export class BranchesPageModule {}
