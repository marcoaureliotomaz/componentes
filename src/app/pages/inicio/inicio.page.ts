import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
  {
    icone: 'alert-circle-outline',
    nome : 'Página de Alerta',
    link : '/alert'
  },
  {
    icone: 'newspaper-outline',
    nome : 'Página Modal',
    link : '/action-sheet'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}


interface Componente{
  icone:string;
  nome: string;
  link: string;
}
