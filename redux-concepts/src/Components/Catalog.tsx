import React, {useState, useEffect} from 'react';

// import {useStore, useSelector, useDispatch} from 'react-redux';
import {IProduct} from '../store/modules/cart/types'
import api from '../services/api'
// import { Container } from './styles';

import CatalogItem from './CatalogItem'
const Components: React.FC = () => {
  
  const [catalog, setCatalog] = useState<IProduct[]>([])
  
  useEffect(() => {
    api.get('products').then(resp => {setCatalog(resp.data)})   
  }, [])

  
  // {
    
  //   const store = useStore()
  //   const state = useSelector(state => state)

    
  //   console.log('NÂO RECOMENDADO Acesso ao STORE', store)
  //   console.log('NÂO RECOMENDADO  Acesso ao estado da aplicação', store.getState())

  //   console.log('SUPER RECOMENDADO  Acesso ao estado da aplicação', state)
  // }
  return (
    <>
      <h1>
        Catalog
      </h1>

      {
        catalog.map(product => (
          <CatalogItem key={product.id} product={product}/>
        ))
      }
    </>
  );
}

export default Components;