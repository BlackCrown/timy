"use client";
// This is a client component
import React from 'react';
// import TodoInput from '@/utils/input';

export default function Todo() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<string>("");

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim() === "") return;
    setTodos((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div>
      <h1>Todo Page</h1>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();}}>
          <label className='block my-2' htmlFor="task">Add your task: </label>
          <input id="task" type="text" onChange={(e) =>(
            setValue(e.target.value)
          )} value={value} className="inline-block p-0.5 text-center rounded-l-md border-2 border-blue-900 focus:border-2 focus:rouded-none " placeholder="Enter a task" />
          <button type='submit' onClick={addTask} className="bg-blue-900 text-white py-1 -ml-1 px-3 rounded-r-md cursor-pointer">+</button>
        </form>
      </div>
      <div>
        <h1>Tasks</h1>
        <ul>
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
