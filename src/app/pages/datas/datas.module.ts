import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasPageRoutingModule } from './datas-routing.module';

import { DatasPage } from './datas.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [DatasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatasPageRoutingModule,
        ComponentesModule
    ]
})
export class DatasPageModule {}
