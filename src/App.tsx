import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import {Title} from './components/title';
import {UnderTitle} from './components/undertitle';
import {CardInterface} from './components/cardinterface';
import CardList from './components/cardlist';
import Footer from './components/footer';
import FreeBox from './components/freebox';
import {box_data} from './boxdata';


const App = () => {


  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<CardInterface[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      if(todo == "clear"){
        setTodos([]);
        setTodo("");
        return;
      }

      if(todo == "help"){
        alert("test");
        setTodo("");
        return;
      }

      
      setTodos([...todos, {
        id:Date.now(),
        name:todo,
        isDone:false,
        link:"",
        description:"",
        tag:""

      }]);


      setTodo("");
    }
  };

  console.log(todos);
  // set inital todos to box_data
  if(todos.length == 0){
    setTodos(box_data);
  }

  return (

    <div className="App">
      <Header todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <div className="top-cont">
        <Title/>

        <FreeBox/>

        <UnderTitle/>
      </div>
      
      <CardList todos={todos} setTodos={setTodos}/>
      <Footer/>

    </div>
  );
}

export default App;
