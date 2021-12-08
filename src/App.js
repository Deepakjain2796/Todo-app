
import './App.css';
import TodoList from './components/TodoList';
import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {
  const [data,setData]= useState([])
  // useEffect(()=>{
  //   const url= 'https://jsonplaceholder.typicode.com/posts'
  //   getData(url)
  // },[])
  async function getData(url){ 
    const response= await axios.get(url)
    setData(response.data)
    console.log (data)
  }
  return (
    <div className='todo-app'>
      <TodoList />
      {data.map((element)=> <p>{element.title}</p>)}
    </div>
  );
}

export default App;
