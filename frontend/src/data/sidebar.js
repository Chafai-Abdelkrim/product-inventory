import React from 'react';
import { FaCommentAlt, FaRegChartBar, FaTh } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';

const menu = [
  {
    title: 'Dachboard',
    icon: <FaTh />,
    path: '/dashboard',
  },
  {
    title: 'Add Product',
    icon: <BiImageAdd />,
    path: '/add-product',
  },
  {
    title: 'Account',
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: 'Profile',
        path: '/profile',
      },
      {
        title: 'Edit Profile',
        path: '/edit-profile',
      },
    ],
  },
  {
    title: 'Report Bug',
    icon: <FaCommentAlt />,
    path: '/contact-us',
  },
];

export default menu;
