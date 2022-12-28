import React from 'react'

export const CartButton = ({id,icon,handleButton}) => {
  
  return (
    <div>
      <button onClick={()=>{handleButton(id)}}>{icon}</button>
    </div>

  )
}

export default CartButton 