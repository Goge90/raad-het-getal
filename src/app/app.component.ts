import { Component, OnInit } from '@angular/core';
import { $, $$ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  teRadenGetal: number = Math.floor(Math.random() * 100) + 1;
  resterendeBeurten: number = 10;

  vorigeGokken: string = '';
  juistOfFout: string = '';
  beurtenOver: string = '';

  isSpelVoorbij: boolean = false;

  doeGok = (gok) => {

    if (this.isGeldigeWaarde(gok)) {
      if (this.resterendeBeurten == 10) {
        this.vorigeGokken = 'Vorige gokken: ';
      }
      this.vorigeGokken += gok + ', ';
  
      this.resterendeBeurten--;
  
      this.beurtenOver = `Nog ${this.resterendeBeurten} beurt${this.resterendeBeurten == 1 ? '' : 'en'} over`;
  
      if (gok == this.teRadenGetal){
        this.juistOfFout = `Proficiat, we zochten ${this.teRadenGetal}. Je hebt gewonnen!`;
        this.eindeSpel();
      } else if (this.resterendeBeurten === 0) {
        this.juistOfFout = `Helaas, geen beurten meer! We zochten ${this.teRadenGetal}.`;
        this.eindeSpel();
      } else {
        this.juistOfFout = `Foute gok! Kies een ${gok > this.teRadenGetal ? "lager" : "hoger"} getal.`;
      }
  
      console.log(this.teRadenGetal);
    }
    else{
      this.juistOfFout = "Gelieve een geheel getal van 1 tot 100 in te voeren."
    }
  }

  isGeldigeWaarde = (getal) => {
    return (!isNaN(getal) &&
            getal <= 100 &&
            getal >= 1 &&
            getal % 1 == 0)
  }

  eindeSpel = () => {
    this.isSpelVoorbij = true;

    this.beurtenOver = '';
  }

  reset = () => {
    this.teRadenGetal = Math.floor(Math.random() * 100) + 1;
    this.resterendeBeurten = 10;
    this.isSpelVoorbij = false;
    this.vorigeGokken = '';
    this.juistOfFout = '';
  }
}