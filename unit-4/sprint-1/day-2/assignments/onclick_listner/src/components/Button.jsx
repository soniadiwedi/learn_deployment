function Button(properties){
    const {text,handleButtonsClick}=properties;
    return <button onClick={handleButtonsClick}>{text}</button>
}


export default Button ;