import {createStore, applyMiddleware} from 'redux';
import rootReducers from './modules/rootReducers'
import rootSaga from './modules/rootSaga'
import {ICartState} from './modules/cart/types';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

export interface IState{
  cart: ICartState
}


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

//toda a aplicação tem acesso ao store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)

export default store