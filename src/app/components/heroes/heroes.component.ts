import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({selector: 'app-heroes', templateUrl: './heroes.component.html'})
export class HeroesComponent implements OnInit {
  busqueda = false; // presuponiendo que no se está buscando desde un inicio
  termino: string; // termino de búsqueda
  heroes: Heroe[] = []; // Aquí se almacenan los datos servidos por HeroesService

  constructor(private _heroesService: HeroesService, private router: Router, private _activatedRouter: ActivatedRoute) {
    // console.log('constructor');
  }

  ngOnInit() {
    // Evento que se dispara cuando está disponible el dom
    this._activatedRouter.params.subscribe(params => {
        // Comprobamos que no recibimos un valor vacío en la búsqueda
        if (Reflect.ownKeys(params).length > 0 && params['termino']) {
          console.log('han pasado parámetros', params['termino']);
          // tslint:disable-next-line:prefer-const
          this.termino = params['termino'];
          this.busqueda = true;
          this.heroes = this._heroesService.buscarHeroes(this.termino);
            console.log(this.heroes);
        } else {
          console.log('no han pasado parámetros!');
          // this.busqueda = false;
          this.heroes = this._heroesService.getHeroes();
        }
      });
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this
      .router
      .navigate(['/heroe', idx]);
  }
}
