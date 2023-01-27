import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente [] = [
    {
      icone : '',
      nome : 'Alerta',
      link : '/Alerta'
    }
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
