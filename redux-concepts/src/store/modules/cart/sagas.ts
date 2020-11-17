import {all, takeLatest, select, call, put} from  'redux-saga/effects';
import {addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure} from './actions';
import {IState} from '../../';
import {AxiosResponse} from 'axios'
import api from '../../../services/api'
 /*
  takeLatest = executaso a ultima
  select = busca informações do estado global
  call = função que executa qualquer promise
  put = dispara uma ação
 */

type CheckProductRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id:number;
  quantity:number
}

function* checkProductStock({payload}:CheckProductRequest){
  console.log('Toda funcao recebe uma Action', payload)
  console.log('Adicionou ao carrinho')

  const {product} = payload;
  const currentQuantity:number = yield  select((state:IState)=> {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockReponse:AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)

  console.log('currentQuantity', currentQuantity)

  if(availableStockReponse.data.quantity > currentQuantity){
    console.log('Deu certo')
    yield put(addProductToCartSuccess(product))
  }else{
    console.log('Falta de estoque')
    
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])