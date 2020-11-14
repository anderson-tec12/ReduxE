import {createStore} from 'redux';
import rootReducers from './modules/rootReducers'
//toda a aplicação tem acesso ao store
const store = createStore(rootReducers)

export default store