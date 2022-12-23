import "./button.css"

function Button(properties){
    const {text,name,id}=properties;
    
      return <button className="btn">{text} {name}</button>
     // return <button className="btn">{properties.text}</button>
    }


export default Button;