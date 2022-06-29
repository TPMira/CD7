import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import Welcome from './page/Welcome'
import { FiSettings } from 'react-icons/fi';

import { TransactionContext } from './context/TransactionContext';
import ThemeSettings from './components/ThemeSettings';
import Header from './components/Header';
import Transactions from './page/Transactions';
import Services from './page/Services';
import Home from './page/Home';
import Login from './page/Login';

const App = () => {


  const { themeSettings, setThemeSettings, currentColor, currentMode } = useContext(TransactionContext);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='dark:bg-main-dark-bg flex'>
          <Header/>
            <div className='fixed top-0 left-0 sidebar w-64 dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
              <div className='ml-64 w-full'>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/swap-wallet' element={ <Welcome/>}/>
                  <Route path='/blocks' element={ <Transactions/> } />
                </Routes>
                { themeSettings && <ThemeSettings/> }
              </div>
              <div className="fixed right-4 bottom-4" style={{zIndex: '100' }}>
                <button type='button' className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" onClick={() => setThemeSettings(true) } style={{background: currentColor, borderRadius: '50%'}}>
                  <FiSettings/>
                </button>
              </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App