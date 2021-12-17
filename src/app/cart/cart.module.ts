import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';



@NgModule({
  declarations: [
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:CardComponent},{path:"details",component:CardDetailsComponent}])
  ]
})
export class CartModule { }
