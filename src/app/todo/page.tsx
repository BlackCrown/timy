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
        <ul className=''>
          {todos.map((task, index) => (
            <div className='my-2 bg-gray-400 p-1 px-6 rounded-md mx-1 content-center' key={index}>
              <li className='flex mx-auto max-w-xl justify-between'>{task}<span>{index + 1}</span></li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
