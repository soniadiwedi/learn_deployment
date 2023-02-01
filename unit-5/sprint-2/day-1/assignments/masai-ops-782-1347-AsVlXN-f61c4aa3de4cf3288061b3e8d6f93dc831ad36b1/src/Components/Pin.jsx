import React, { forwardRef } from "react";
import PropTypes from "prop-types"
export const Pin =forwardRef( ({ maxChar,handlefocus,backSpaceHandler },ref) => {

  const keyHandler=(e,index)=>{
    if(e.keyCode==8){
      backSpaceHandler(e,index)
    }else{
      handlefocus(e,index)
    }
  }

  return <input data-testid="pin-input"
            ref={ref}
            onKeyUp={(e)=>keyHandler(e)}
            maxLength={maxChar}
          />;
})


 Pin.propTypes={
  maxChar:PropTypes.number.isRequired,
}
// Check maxChar prop here
