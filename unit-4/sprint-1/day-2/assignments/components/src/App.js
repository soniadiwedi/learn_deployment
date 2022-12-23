
import './App.css';

import Button from './Components/Button';
import Avatar from './Components/Avatar';

const sqaredArr=[1,2,3,4,5].map((el)=>{
  return <li>{el*2}</li>
})
//-------------------------------------------------
const user=[{
  id: 1,
  user_url:"https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=300",
  name:"India",
  round:true
},
{
  id: 2,
  user_url:"https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg",
  name:"Sun",
  round:false 
}
];

const users=user.map((el)=>{
  return (
    <Avatar src={el.user_url} name={el.name} rounded={el.round}/>
  )
})


function App() {
  return (
    <div className="App">
      <ul>{sqaredArr}</ul>
      <h1>Hello</h1>
     <Button text="Click me" name="Sonia"/>
     {users}
    
    </div>
  );
}

export default App;
