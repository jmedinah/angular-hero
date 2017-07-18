import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  template:`
  <div>
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  `
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero:Hero;  
  constructor() { }

  ngOnInit() {
  }

}
