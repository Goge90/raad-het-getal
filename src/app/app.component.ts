import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

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
  lagerOfHoger: string = '';
  beurtenOver: string = '';

  isDisabled: boolean = false;

  doeGok(gok: number) {

    let nieuweGok: number = gok;
    if (this.resterendeBeurten == 10) {
      this.vorigeGokken = 'Vorige gokken: ';
    }
    this.vorigeGokken += nieuweGok + ', ';

    this.resterendeBeurten--;

    this.beurtenOver = `Nog ${this.resterendeBeurten} beurt${this.resterendeBeurten == 1 ? '' : 'en'} over`;

    if (nieuweGok == this.teRadenGetal){
      this.juistOfFout = "Proficiat, u heeft gewonnen!";
      this.eindeSpel();
    } else if (this.resterendeBeurten === 0) {
      this.juistOfFout = "Helaas, geen beurten meer! Game Over";
      this.eindeSpel();
    } else {
      this.juistOfFout = "Foute gok!";
      if (nieuweGok > this.teRadenGetal) {
        this.lagerOfHoger = "Kies een lager getal";
      } else {
        this.lagerOfHoger = "Kies een hoger getal";
      } 
    }

    console.log(this.teRadenGetal);
  }

  eindeSpel() {
    this.isDisabled = true;

    this.lagerOfHoger = '';
    this.beurtenOver = '';
  }  
}