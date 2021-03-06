import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
//import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  
  allheroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  
  constructor() { }
  
  getHeroes(): Observable<Hero[]> {
    return of(this.allheroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.allheroes.find(hero => hero.id === id));
  }

}
