function TotalPrice({item}){
return <>
    {
        item.reduce((acc,el)=>{
            acc+=(Number(el.price)*Number(el.quantity))
            return acc
        },0)
    }
</>
}


export default TotalPrice