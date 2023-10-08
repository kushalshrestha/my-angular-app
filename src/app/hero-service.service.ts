import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [{
    id: 1,
    name: 'Kushal',
  },
  {
    id: 2,
    name: 'Anil',
  },
  {
    id: 3,
    name: 'Messi',
  }];

  constructor() { }

  getHeroes() {
    return this.heroes;
  }
}
