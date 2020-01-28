import { ProductState } from "./products/models"

// NOTE: if add 'other' ducks, add 'otherState' properties.
export interface State {
  products: ProductState
}
