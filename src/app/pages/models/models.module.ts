import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelsPageRoutingModule } from './models-routing.module';

import { ModelsPage } from './models.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModelsPageRoutingModule
  ],
  declarations: [ModelsPage]
})
export class ModelsPageModule {}
