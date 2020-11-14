import React from 'react';
import {Provider} from  'react-redux'

import store from  './store/index'

import Catalog from './Components/Catalog'

function App() {
  return (
    <Provider store={store}>      
      <Catalog />
    </Provider>
  );
}

export default App;
