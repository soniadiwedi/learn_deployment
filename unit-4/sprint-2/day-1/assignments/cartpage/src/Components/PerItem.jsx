import CartButton from "./CartButton";


const PerItem =({kunji,id,title,price,quantity,label,increaseItem,decreaseItem})=>{
let styles={
    display:'flex',
    justifyContent:"space-around",
    alignItems:'center'
}

let style1={
    display:'flex',
    justifyContent:"space-around",
    alignItems:'center'
}
    return <div key={kunji} style={styles}>
        <h2>{title}</h2>
        <p><span>{label}</span>&nbsp;<span>{price}</span></p>
        <div style={style1}>
        <CartButton icon={'+'} id={id} handleButton={increaseItem}/>
        <h3>{quantity}</h3>
        <CartButton icon={'-'} id={id} handleButton={decreaseItem}/>
        </div>
        
    </div>
}


export default PerItem