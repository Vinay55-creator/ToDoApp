import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";
import { useState } from "react";

function App() {
  const initialtodoItems = [];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const onAddButton = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <div>
      <center className="Todo-container">
        <AppName />
        <AddTodo onNewItem={onAddButton} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </div>
  );
}

export default App;
