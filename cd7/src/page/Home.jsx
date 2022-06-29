import React, { useContext } from 'react';

import Button from '../components/Button';


import { TransactionContext } from '../context/TransactionContext';

import  '../data/dummy.jsx'

const Home = () => {

  const {  balance,  currentColor } = useContext(TransactionContext);

  return (
    <div className='overlay'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='dark:bg-secondary-dark-bg bg-white h-36 rounded-xl lg:w-80 pl-3 pt-2 m-4 bg-no-repeat bg-cover bg-left'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold dark:text-white'>Earnings</p>
                    <span className='dark:text-white'>BNB: {balance} </span>
            </div>
          </div>
          <div className='mt-6'>
          <Button
            color='white'
            bgColor={currentColor}
            text='Your Balance'
            borderRadius='10px'
          >
            <p className='text-white text-base font-semibold'>your balance</p>
          </Button>
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
        </div>
      </div>

      <div className='flex gap-10 flex-wrap'>
        <div className='bg-white dark:bg-secondary-dark-bg m-4 pl-3 pr-3 pt-2 mt-1 rounded-2xl md:w-1/6'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl dark:text-white'>Revenue Updates</p>
          </div>
          <div className='mt-3 flex gap-10 flex-wrap justify-left'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold dark:text-white'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1 '>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold dark:text-white'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1 '>Expense</p>
              </div>

              <div className='mt-5'>
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>

            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    <div className='moving-background'></div>
    </div>
  )
}

export default Home