// Your code goes here
// do a default export
import { useState } from "react";
 function UserCard(pro){
let [follows,setfollows]=useState("follow")
  
function handlechange(){
    follows=="follow"?setfollows("following"):setfollows("follow")
}
    
  return(
    <>
        <img src={pro.avatar} style={{borderRadius:"50%"}} alt={pro.name}/>
        <h2 data-testid = "user_name">{pro.name}</h2>
        <p data-testid = "user_address">{pro.address}</p>
        <h3 >Posts</h3>
        <p data-testid = "user_posts">{pro.posts}</p>
        <h3>Followers</h3>
        <p data-testid = "user_followers">{}pro.followers</p>

        <button onClick={handlechange}>{follows}</button>
    </>
  )
}


export default UserCard;