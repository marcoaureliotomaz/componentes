import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
