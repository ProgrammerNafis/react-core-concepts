import { useEffect, useState } from 'react';
import './App.css';

function App() {  
  const productList = [
    {name:'alien book',price:540},
    {name:'funny book',price:530},
    {name:'face book',price:545},
    {name:'online book',price:504},

  ]
  return (
    <div className="App">
      <Counter/>
    <Userlist/>

     {
      productList.map(item =>  <Products product={item}></Products>)
     }


    </div>
  );
}

 function Products(props) {  
  const {name,price} = props.product;
  const pstly = {
    color:'white',
    backgroundColor:'black',
    padding:'1rem',
    margin:'10px',

  }
  return (
    <div className="App" style={pstly}>
      <p>{`Name: ${name}`}</p>
      <p>{`Price: ${price}`}</p>
      <button>Buy NOw</button>

    </div>
  );
}


function Counter(){
  const [count,setCount] = useState(0)
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>{
        const newCount = count + 1;
        setCount(newCount)
      }} style={{padding:'20px',margin:'5px'}}>Increase</button>
       <button onClick={()=>{
        const deCount = count - 1;
        setCount(deCount)
       }} style={{padding:'20px',margin:'5px'}}>Decrease</button>
    </div>
  );
};


function Userlist(){
  const [user,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setUser(data))
  },[])

  return(
    <div>
      <h2>Api Users Length:{user.length}</h2>
      <li>
       {
       user.map(usr=> <li>{usr.name}</li> )
       }
      </li>
    </div>
  );
};

export default App;
