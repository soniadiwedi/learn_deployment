import React, { forwardRef } from "react";

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

// Check maxChar prop here
