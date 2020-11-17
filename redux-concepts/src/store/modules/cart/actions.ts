import {IProduct, ActionTypes} from './types'

export function addProductToCartRequest(product:IProduct){
  return {
    type: ActionTypes.addProductToCartRequest,
    payload:{ //qualquer informação adicional
      product
    }
  }
}

export function addProductToCartSuccess(product:IProduct){
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload:{ //qualquer informação adicional
      product
    }
  }
}

export function addProductToCartFailure(productID:number){
  return {
    type: ActionTypes.addProductToCartFailure,
    payload:{ //qualquer informação adicional
      productID
    }
  }
}