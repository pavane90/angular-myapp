import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heros";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes: Hero[];
  constructor(private messageService: MessagesService) {}

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */
  getHeroes(): Observable<Hero[]> {
    //메시지 전송
    this.messageService.add("heroes 데이터 받아옴");
    return of(HEROES);
  }
}
