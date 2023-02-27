import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridsPageRoutingModule } from './grids-routing.module';

import { GridsPage } from './grids.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [GridsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GridsPageRoutingModule,
        ComponentesModule
    ]
})
export class GridsPageModule {}
