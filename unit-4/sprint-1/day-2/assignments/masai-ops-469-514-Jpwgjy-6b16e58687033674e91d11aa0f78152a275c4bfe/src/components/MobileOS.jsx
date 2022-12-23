let list1=["Android" , "Blackberry","iPhone", "Windows Phone"];
let list2=["Samsung","HTC","Micromax","Apple"];
   
let list1Arr=list1.map((el)=>{
    return <li>{el}</li>
})  

let list2Arr = list2.map((el)=>{
    return <li>{el}</li>
})
    
function MobileOS(){
return (
    <div>
        <h1>Mobile Operating System</h1>
        <ul data-testid = "os-list">{list1Arr}</ul>
        <h1>Mobile Manufacturers</h1>
        <ul data-testid = "manufacturers-list">{list2Arr}</ul>

    </div>
)
}



export default MobileOS