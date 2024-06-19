import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

 
   const [todoItems,setTodoItems] = useState([]);

   const handleNewItem = (itemName,itemDueDate) => {
    console.log(`New item Added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems,
      {name: itemName,
      dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);
   };

   const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    
   };

  return ( <div className="p-3 mb-2 bg-secondary text-black "> 
    <center className="todo-container">
     <AppName />
     <Addtodo  onNewItem={handleNewItem}/>
     {todoItems.length === 0 && <WelcomeMessage  ></WelcomeMessage>}
     <TodoItems  todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
    </div>
  )
}

export default App;
