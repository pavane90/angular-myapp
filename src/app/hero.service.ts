import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heros";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes: Hero[];
  constructor() {}

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
