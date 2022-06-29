import { Component, OnInit } from '@angular/core';
import { Theme } from './theme';
import { THEMES } from './mock-themes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  theme: Theme = {
    id: 10,
    name: 'Coffee'
  };

  themes = THEMES;
  selectedTheme: Theme | undefined;

  jokesURL = 'https://api.sampleapis.com/jokes/goodJokes';
  jokes: any = [];

  countriesURL = 'https://api.sampleapis.com/countries/countries';
  countries: any = [];

  beersURL = 'https://api.sampleapis.com/beers/ale';
  beers: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(theme: Theme): void {
    this.selectedTheme = theme;
  }
}
