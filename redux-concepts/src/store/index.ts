import {createStore} from 'redux';
import rootReducers from './modules/rootReducers'
import {ICartState} from './modules/cart/types';

export interface IState{
  cart: ICartState
}

//toda a aplicação tem acesso ao store
const store = createStore(rootReducers)

export default store