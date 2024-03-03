import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Services and Value-Add </h1>
      <div className='serviceList'> {MenuList.map((menuItem, key) => {
        return <MenuItem  
        key ={key}
        image = {menuItem.image} 
        name = {menuItem.name} 
        appointment = {menuItem.appointment} 
        />
      })}
        
      </div>
    </div>
  );
}

export default Menu;