import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log('--get heroes ');
    this.heroService.getHeroes()
      .subscribe(heroes => {
        console.log('hers ----- **', heroes);
        // heroes = Object.values(heroes);
        heroes = this.heroService.prepareFirebaseHeroItems(heroes);

        this.heroes = heroes.slice(1, 5);
      });
  }
}
