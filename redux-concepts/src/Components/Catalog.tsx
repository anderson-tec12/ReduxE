import React, {useState, useEffect, useCallback} from 'react';
import {useStore, useSelector, useDispatch} from 'react-redux';
import {IProduct} from '../store/modules/cart/types'
import {addProductToCart} from '../store/modules/cart/actions'
import api from '../services/api'
// import { Container } from './styles';

const Components: React.FC = () => {
  const dispatch = useDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])
  
  useEffect(() => {
    api.get('products').then(resp => {setCatalog(resp.data)})   
  }, [])

  const handleAddProductToCart = useCallback((product:IProduct ) => {
    dispatch(addProductToCart(product))
  },[dispatch])
  {
    const store = useStore()
    const state = useSelector(state => state)

    
    console.log('NÂO RECOMENDADO Acesso ao STORE', store)
    console.log('NÂO RECOMENDADO  Acesso ao estado da aplicação', store.getState())

    console.log('SUPER RECOMENDADO  Acesso ao estado da aplicação', state)
  }
  return (
    <>
      <h1>
        Catalog
      </h1>

      {
        catalog.map(product => (
          <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"  "}
            <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
          </article>
        ))
      }
    </>
  );
}

export default Components;