import { MenuComponent } from './../../componentes/menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente [] = [
    {
      icone : 'alert-circle-outline',
      nome : 'Alerta',
      link : '/alert'
    },
    {
      icone : 'documents-outline',
      nome : 'Modal',
      link : '/action-sheet'
    },
    {
      icone : 'book-outline',
      nome : 'Cards',
      link : '/cards'
    },
    {
      icone : 'calendar-outline',
      nome : 'Datas',
      link : '/datas'
    },
    {
      icone : 'grid-outline',
      nome : 'Grids',
      link : '/grids'
    },
    {
      icone : 'grid-outline',
      nome : 'Inputs',
      link : '/inputs'
    },
  ] ;

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  toogleMenu() {
    this.menu.toggle();
    }
    

}


