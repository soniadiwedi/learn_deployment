
import React from 'react'
import PerItem from './PerItem'
const SareItem = ({data,increaseItem,decreaseItem}) => {
  return <>
    {
      data.map((el)=>{
        return <PerItem kunji={el.id} {...el} increaseItem={increaseItem} decreaseItem={decreaseItem}/>
      })
    }
  </>
}

export default SareItem
