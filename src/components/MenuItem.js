import React from 'react';

function MenuItem({image, name, appointment}) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> {appointment} </p>
    </div>
  );
}

export default MenuItem;
