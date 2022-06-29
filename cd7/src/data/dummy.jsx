import React from 'react';
import { FaHome, FaVectorSquare } from 'react-icons/fa';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts, IoMdSwap } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

import { GiLouvrePyramid } from 'react-icons/gi';



export const links = [
  {
    links: [
      {
        name: 'home',
        icon: <FaHome />,
      },
    ],
  },

 
  {
    title: 'blockchain',
    links: [
      {
        name: 'swap-wallet',
        icon: <IoMdSwap />,
      },
      {
        name: 'blocks',
        icon: <FaVectorSquare />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];