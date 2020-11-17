import {Reducer} from 'redux'
import {ICartState, ActionTypes} from './types'

import produce from 'immer' //immer

const INITIAL_STATE:ICartState = {
  items: [],
  failedStockCheck:[]
}

const cart:Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  console.log('ESTADO', state,'ACTION' ,action)
  return produce(state, draft => {
    switch(action.type){
      case ActionTypes.addProductToCartSuccess:{
        console.log('ADD_PRODUCT_TO_CART_SUCCESS')
        const {product} = action.payload;

        const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id)
        
        if(productInCartIndex >= 0 ){
          draft.items[productInCartIndex].quantity++
        }else{
          draft.items.push({
            product, 
            quantity:1
          })
        }
        
        break
        
      }
      case ActionTypes.addProductToCartFailure:{
        console.log('failure', action.payload)
        draft.failedStockCheck.push(action.payload.productID)
        break
      }
      default:{
        return draft
      }
    }
  })
  
}

export default cart