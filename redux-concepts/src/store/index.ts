import {createStore} from 'redux';

//toda a aplicação tem acesso ao store
const store = createStore(()=> {
  return  {
    id: 1,
    email: 'anderson@gmail.com',
    name:'Anderson Barros Silva'
  }
})

export default store