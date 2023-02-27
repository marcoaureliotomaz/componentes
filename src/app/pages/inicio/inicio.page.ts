import { Component, OnInit } from '@angular/core';

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
  ] ;

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone:string;
  nome:string;
  link: string;
}
