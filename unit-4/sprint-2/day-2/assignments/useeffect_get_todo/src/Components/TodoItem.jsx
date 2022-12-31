import React from 'react'

function TodoItem({key,title,id}){
  return <div key={key}>
    
          <span>{id}</span>  <input type="text" value={title} />  
            
    </div>
        
 
}

export default TodoItem