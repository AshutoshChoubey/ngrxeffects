import { getCardData } from './action/card.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, pluck } from 'rxjs/operators'

@Injectable()
export class CardEffects {
  
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType('[Card component] getCard'),
    mergeMap((param: any) => {
      return this.http.get(param.payload)
        .pipe(
          map(data => {
            return ({ type: '[Card component] getCardData', payload: data })
          }
          )
        )
    }
    )
  )
  );
 
  loadCardsDetails$ = createEffect(() => this.actions$.pipe(
    ofType('[Card component] getCardDetails'),
    mergeMap((param: any) => {
      return  this.http.get(param.payload)
        .pipe(
          map(data => {
            return ({ type: '[Card component] getCardDetailsData', payload: data })
          }
          )
        )
    }
    )
  )
  );

  constructor(private actions$: Actions, private http: HttpClient) { }
}


