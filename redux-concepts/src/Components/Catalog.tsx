import React from 'react';
import {useStore, useSelector} from 'react-redux';

// import { Container } from './styles';

const Components: React.FC = () => {
  const store = useStore()
  const state = useSelector(state => state)

  
  console.log('NÂO RECOMENDADO Acesso ao STORE', store)
  console.log('NÂO RECOMENDADO  Acesso ao estado da aplicação', store.getState())

  console.log('SUPER RECOMENDADO  Acesso ao estado da aplicação', state)
  return (
    <h1>
      Catalog
    </h1>
  );
}

export default Components;