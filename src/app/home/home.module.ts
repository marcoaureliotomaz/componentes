import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/pages/alert/alert.module.ts
    AlertPageRoutingModule, 
    ComponentesModule
=======
    HomePageRoutingModule
>>>>>>> parent of d5e804e (Hugo Cursos - IONIC 6 - Aula 8 - Aula 11):src/app/home/home.module.ts
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
