import React from 'react'
import { IoTrashOutline } from "react-icons/io5";

const LineItems = ({item , handleCheckboxChange, deleteBox}) => {
  return (
   
    <li className='item' >
    <input 
    type="checkbox" 
    checked= {item.checked}
    onChange={() => handleCheckboxChange(item.id)}
    />   

  <label
      style={item.checked ?
        {
      textDecoration:'line-through'}:
      null
        }
      onDoubleClick={() => handleCheckboxChange(item.id)}

  > {item.item}</label>

  < IoTrashOutline 
    role='buttton'
    tabIndex="0"
    onClick={() =>  deleteBox(item.id)}
  />
  
  </li>

  )
}

export default LineItems