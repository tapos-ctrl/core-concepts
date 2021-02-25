import logo from './logo.svg';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = [
    {name:'Tapso', podobi:'Kumar'},
    {name:'Songit', podobi:'mondol'},
    {name:'Chumki', podobi:'mohont'},
    {name:'Rinki', podobi:'mohont'},
    {name:'Pinki', podobi:'mohont'}
]
const manNames = names.map(names => names)
console.log(manNames);
  return (
    <div className="App">

        <p>My first react paragraph</p>
        <Counter></Counter>
        <User></User>
        <Person man={names[0].name} podobi={names[0].podobi}></Person>
        <Person man={names[1].name} podobi={names[1].podobi}></Person>
        <Person man={names[2].name} podobi={names[2].podobi}></Person>

        <ul>
          {
            names.map(names => <li>{names.name}</li>)
          }
        </ul>
        
    </div>

  );
 
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count +1);
  const handilDiscres = () => setCount(count -1);

    return(
      <div>
        <button onClick ={handilDiscres}>Dicries</button>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    )
}

function Person(props) {
 
  const parsonStyle={
    border:'2px solid red',
    margin:'10px',
    background:'green', 
    borderRadius:'10px'
  }
  console.log(props)
  return (
    <div style={parsonStyle}>
        <h1>{props.man}</h1>
        <p>{props.podobi}</p>
    </div>
    
  ) 
}
// function User() {
//   const [users, setUseers] = useState([]);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data=> setUseers(data));
//   },[])
  
//   return(
//     <div>
//       <h3>Dynamic Users: {users.length}</h3>
//       <ul>
//         {
//           users.map(user => <li>{user.name}</li>)
//         }
//       </ul>
//     </div>
//   )
    
// }
function User() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
