import React from 'react'
import {useSelector} from 'react-redux';
export default function Cart() {
  const state = useSelector(state => state)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
