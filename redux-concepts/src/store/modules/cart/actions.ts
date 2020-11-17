import {IProduct} from './types'

export function addProductToCartRequest(product:IProduct){
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload:{ //qualquer informação adicional
      product
    }
  }
}

export function addProductToCartSuccess(product:IProduct){
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload:{ //qualquer informação adicional
      product
    }
  }
}

export function addProductToCartFailure(productID:number){
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload:{ //qualquer informação adicional
      product:[]
    }
  }
}