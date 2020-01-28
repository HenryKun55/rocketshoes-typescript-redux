import { createAction } from "typesafe-actions"

import { ProductState } from "./models"

export const getProducts = createAction("ADD_TODO")<ProductState["products"]>()

export default {
  getProducts,
}
