import {Reducer} from 'redux'
import {ICartState} from './types'

import produce from 'immer' //immer

const INITIAL_STATE:ICartState = {
  items: []
}

const cart:Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  console.log(state, action)
  return produce(state, draft => {
    switch(action.type){
      case 'ADD_PRODUCT_TO_CART':{
        console.log('ADD_PRODUCT_TO_CART')
        const {product} = action.payload;

        //return produce(state, draft => {
          draft.items.push({
            product, 
            quantity:1
          })
        break
        
      }
      default:{
        return draft
      }
    }
  })
  
}

export default cart