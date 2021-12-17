import { getCardDetails, getCardDetailsData } from './../action/card.action';
import { createReducer, createSelector, on } from "@ngrx/store";
import { getCardData, getCard } from "../action/card.action";


export interface cardInterface {
    id: string,
    name: string,
    sprites:any,
    abilities:any
}
interface getCardInterface {
    limit: number
    offset: number,
}



const initialCardDataState: cardInterface[] = [];
const initialGetCardState: getCardInterface[] = []
const initialGetCardDetails: cardInterface[] = [];
const initialCardDetailsData: getCardInterface[] = []


export const cardReducer = createReducer(initialCardDataState, on(getCardData, (state, data) => {
    return [data]
})
)
export const getCardReducer = createReducer(initialGetCardState, on(getCard, (state, data) => {
    return { ...state, data }
})
)
export const getCardDetailsReducer = createReducer(initialGetCardDetails, on(getCardDetails, (state, data) => {
    return { ...state, data }
})
)
export const getCardDetailsDataReducer = createReducer(initialCardDetailsData, on(getCardDetailsData, (state, data) => {
    return { ...state, data }
})
)
