import {all, takeLatest, select} from  'redux-saga/effects';
import {addProductToCartRequest} from './actions'
import {IState} from '../../'
 /*
  takeLatest = executaso a ultima
  select = busca informações do estado global
 */

 type CheckProductRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({payload}:CheckProductRequest){
  console.log('Toda funcao recebe uma Action', payload)
  console.log('Adicionou ao carrinho')

  const {product} = payload;
  const currentQuantity:number = yield  select((state:IState)=> {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  console.log('currentQuantity', currentQuantity)
}

export default all([
  takeLatest('addProductToCartRequest', checkProductStock)
])