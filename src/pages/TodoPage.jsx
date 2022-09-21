import React, { useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Dedicarle 1 hora al dia a aprender Javascript",
      completed: true
    },
    {
      id: 2,
      description: "Tomar notas de lo que aprendo diario",
      completed: false
    }
  ]);

  const markAsCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const renderTodo = (todo) => {
    return (
      <li onClick={() => markAsCompleted(todo.id)} className="list-group-item">
        <span className={`${todo.completed ? "todo-completed" : ""}`}>
          {todo.description}
        </span>
      </li>
    );
  };

  const todoDescriptions = todos.map(renderTodo);

  return (
    <div>
      <h1> TodoPage </h1>
      <div className="container">
        <ul className="list-group">{todoDescriptions}</ul>
      </div>
    </div>
  );
};

/*
{
  todos.map ((todo)=> {

  })

  todos.map(function(todo){
    console.log(todo)
    todo.id
  })
}
*/

export default TodoPage;
