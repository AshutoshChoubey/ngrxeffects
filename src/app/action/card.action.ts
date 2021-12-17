import { createAction, props } from "@ngrx/store";

interface cardInterface {
    id: string,
    name: string,
    sprites:any,
    abilities:any
}
interface getCard {
    limit: number
    offset: number
}

export const getCardData = createAction('[Card component] getCardData', props<cardInterface>())
export const getCard = createAction('[Card component] getCard', props<getCard>())
export const getCardDetails = createAction('[Card component] getCardDetails', props<getCard>())
export const getCardDetailsData = createAction('[Card component] getCardDetailsData', props<getCard>())

