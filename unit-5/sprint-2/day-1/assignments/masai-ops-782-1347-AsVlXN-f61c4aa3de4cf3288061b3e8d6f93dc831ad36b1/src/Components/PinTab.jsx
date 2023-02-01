import React, { useState } from "react";
import { Pin } from "./Pin";
import PropTypes from "prop-types"
import { useRef } from "react";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const[pinlength]=useState(new Array(length).fill(""))
  const inputRef=useRef([])
  const [otpValue] =useState(new Array(length).fill(""))
  
  const handleFocus=(e,index)=>{
    otpValue[index]=e.target.value
      if(e.target.value.length===maxChar && index<length-1){
        inputRef.current[index+1].focus()
      }
      setOtp(otpValue.join(" "))
  }

  const backSpaceHandler=(e,index)=>{
    otpValue[index]=e.target.value
      if(e.target.value.length==0 && index>0){
        inputRef.current[index-1].focus()
      }
      setOtp(otpValue.join(" "))
  }
/////////////////////////////////////////////////////
const pasteHandler=(e)=>{
  const data=e.clipboardData.getData("Text").split("").filter((_,index)=>{
      return index<length
  })

  data.forEach((el,index)=>{
      otpValue[index]=el
      inputRef.current[index].value=el
      if(e.target.value.length===maxChar && index <length-1){
          inputRef.current[index+1].focus()
      }
      setOtp(otpValue.join(" "))
  })  
}


  return <div data-testid="pin-tab" onPaste={pasteHandler}>{/* Add Pin component here  */}
    {
      pinlength.map((e,index)=>{
        return <Pin 
        key={index} 
        maxChar={maxChar}
        ref={(e)=>{inputRef.current[index]=e}}
        handlefocus={(e)=>handleFocus(e,index)}
        backSpaceHandler={(e)=>backSpaceHandler(e,index)}

        />
      })
    }
  
  </div>;
};

PinTab.propTypes={
  length:PropTypes.number.isRequired,
  maxChar:PropTypes.number.isRequired
}
// Check length and maxChar props here
