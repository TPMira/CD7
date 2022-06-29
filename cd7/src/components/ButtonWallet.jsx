import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const ButtonWallet = ({bgColor, color, size, text, borderRadius }) => {

    const { connectWallet } = useContext(TransactionContext);

  return (
    <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-1 pl-4 pr-4 top-2 right-2 absolute hover:drop-shadow-xl`} onClick={connectWallet}>
      {text}
    </button>
  )
}

export default ButtonWallet