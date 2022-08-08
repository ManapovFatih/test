import { Menu } from 'antd';
import React from 'react';
import User from './User.svg';
import bell from './bell.svg';
const items = [
    {
        icon: <img src={bell} alt=''/>,
        children: [
       {
         type: 'group',
         label: 'Item 1',
         children: [
           {
             label: 'Option 1',
           },
           {
             label: 'Option 2',
           },
         ],
       },
       {
         type: 'group',
         label: 'Item 2',
         children: [
           {
             label: 'Option 3',
           },
           {
             label: 'Option 4',
           },
         ],
       },
     ],
   },
   {
        icon: <img src={User} alt=''/>,
        children: [
        {
            type: 'group',
            label: 'Item 1',
            children: [
            {
                label: 'Option 1',
            },
            {
                label: 'Option 2',
            },
            ],
        },
        {
            type: 'group',
            label: 'Item 2',
            children: [
            {
                label: 'Option 3',
            },
            {
                label: 'Option 4',
            },
            ],
        },
        ],
    },
 ];
 
const RMenu = () => {
    return (
        <div>
            
            <Menu mode="horizontal" items={items} style={{background:'#F2F2FA'}}/>
        </div>
    );
};

export default RMenu;