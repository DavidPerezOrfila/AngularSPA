import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ) {
    this.router.navigate( ['/heroes', termino] );
    // console.log(termino);
}
}
