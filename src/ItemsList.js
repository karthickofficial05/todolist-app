import React from 'react'

import LineItems from './LineItems';

const ItemsList = ({items , handleCheckboxChange, deleteBox}) => {
  return (
   
        <ul>
          
            {items.map((item) => (
              <LineItems 
                 item={item}
                 key={item.id}
                 handleCheckboxChange={handleCheckboxChange}
                 deleteBox={deleteBox}
              />

  
            ))}
         </ul>
  )
}

export default ItemsList