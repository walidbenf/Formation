import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { HeroService } from './hero.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private monService:HeroService) { }
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroes = this.monService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes();
  }

}
