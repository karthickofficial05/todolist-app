import React from 'react';
import ItemsList from './ItemsList'; 

const Content = ({ items, handleCheckboxChange, deleteBox }) => {
  return (
    <>
      {items.length ? (
        <ItemsList  
          items={items}
          handleCheckboxChange={handleCheckboxChange}
          deleteBox={deleteBox}
        />        
      ) : (
        <p>Your list is empty</p>
      )}
    </>   
  );
};

export default Content;
