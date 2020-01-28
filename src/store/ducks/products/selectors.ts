import { createSelector, Selector } from "reselect"

import { State } from "../types"

import { IProduct, ProductState } from './models'

export const rootSelector: Selector<State, ProductState> = (state: State) => state.products

// const getProducts = createSelector(
//     rootSelector,
//     (state: State) => {
//       return state.products
//     }
// )
