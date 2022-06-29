import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TransactionContext } from '../context/TransactionContext';


import { links } from '../data/dummy';


const Sidebar = () => {

  const { currentColor } = useContext(TransactionContext);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='px-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 border-r'>
      
        <div className='flex justify-between items-center'>
          <p className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900">
            <span className="dark:text-white">
                  Cold7
            </span>
          </p>
          
            
          
        </div>
        <div>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`}
                key={link.name}
                onClick={() => {}}

                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor: ''
                })}

                className={({ isActive}) => 
                isActive ? activeLink :
                normalLink }
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        
      </div>
  )
}

export default Sidebar