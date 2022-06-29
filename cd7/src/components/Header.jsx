import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import { shortAddress } from '../utils/shortenAddress';
import ButtonWallet from './ButtonWallet';

const Header = () => {

    const { currentAccount, currentColor } = useContext(TransactionContext);

    return (
            
            <div className='text-white'>
                <div>
                {!currentAccount && (
                    <ButtonWallet
                        color='white'
                        bgColor={currentColor}
                        text='Connect'
                        borderRadius='10px'
                    >
                    </ButtonWallet>
                )}
                {currentAccount && (
                    <ButtonWallet
                        color=''
                        bgColor={currentColor}
                        text={shortAddress(currentAccount)}
                        borderRadius='15px'
                    >
                    </ButtonWallet>
                )}
                </div>
            </div>
    );
}

export default Header