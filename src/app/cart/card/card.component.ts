import { Router } from '@angular/router';
import { getCard } from '../../action/card.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cardInterface } from 'src/app/reducer/card.reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData$=this.store.select('card');
  constructor(private store: Store<{ card: cardInterface }>,public router:Router) {

  }

  ngOnInit(): void {
   this.store.dispatch({ type: '[Card component] getCard',payload: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200' });
  }
  loadCartDetails(url){
    this.router.navigateByUrl('cart/details', {state: url});
  }
  load(url){
    this.store.dispatch({ type: '[Card component] getCard',payload: url });
  }

}
