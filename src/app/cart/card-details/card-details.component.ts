import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cardInterface } from 'src/app/reducer/card.reducers';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  passedState: { [k: string]: any; };
  image: any;
  name: any;
  forms: any;
  abilities: any;

  constructor(private router: Router, private store: Store<{ getCardDetailsData: cardInterface }>) {
    this.passedState = this.router.getCurrentNavigation().extras.state;
    this.passedState ? this.store.dispatch({ type: '[Card component] getCardDetails', payload: this.passedState }) : this.back();
  }

  getCardDetailsData$ = this.store.select('getCardDetailsData');

  ngOnInit(): void {
    this.getCardDetailsData$.subscribe((val)=>{
      this.image=val["data"]?.payload?.sprites.back_default
      this.name=val["data"]?.payload?.name
      this.forms=val["data"]?.payload?.forms
      this.abilities=val["data"]?.payload?.abilities
    })
  }
  back(){
    this.router.navigateByUrl("cart");
  }

}
