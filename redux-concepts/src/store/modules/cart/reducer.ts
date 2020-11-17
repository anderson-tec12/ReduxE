import {Reducer} from 'redux'
import {ICartState, IProduct} from './types'

import produce from 'immer' //immer

const INITIAL_STATE:ICartState = {
  items: []
}

const cart:Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  console.log(state, action)
  return produce(state, draft => {
    switch(action.type){
      case 'ADD_PRODUCT_TO_CART_SUCCESS':{
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
      default:{
        return draft
      }
    }
  })
  
}

export default cart