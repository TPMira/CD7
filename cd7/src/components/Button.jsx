import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const Button = ({bgColor, color, size, text, borderRadius }) => {

  const { getBalance } = useContext(TransactionContext);

  return (
    <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-2 hover:drop-shadow-xl`} onClick={() => getBalance()}>
      {text}
    </button>
  )
}

export default Button