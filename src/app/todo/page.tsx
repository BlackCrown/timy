'use client';
// This is a client component
import React from 'react';
import TodoTask from '@/components/todoTask';


interface iTask {
  text: string;
  id: number;
  completed: boolean;
}

export default function Todo() {
  const [value, setValue] = React.useState<string>('');
  const [todos, setTodos] = React.useState<iTask[]>([]);

function deletTask(id: number) {
  setTodos(todos.filter((element) => element.id !== id));
}

function editTask(id: number) {
  const newTaskText = prompt(
    'Enter the new task',
    todos.filter((task) => task.id === id)[0].text,
  );
  if (newTaskText !== null && newTaskText !== '') {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, text: newTaskText } : task,
      ),
    );
  }
}

function toggleCompleteTask(id: number) {
  const taskComplete = todos.filter((task) => task.id === id);
  if (taskComplete) {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
}


  function addTask(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim() === '') return;
    const newTask: iTask = {
      text: value,
      id: todos.length + 1,
      completed: false,
    };
    setTodos((prev: iTask[]) => [...prev, newTask]);
    setValue('');
  }

  return (
    <div>
      <h1>Todo Page</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="block my-2" htmlFor="task">
            Add your task:{' '}
          </label>
          <input
            id="task"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="inline-block p-0.5 text-center rounded-l-md border-2 border-blue-900 focus:border-2 focus:rouded-none "
            placeholder="Enter a task"
          />
          <button
            type="submit"
            onClick={addTask}
            className="bg-blue-900 text-white py-1 -ml-1 px-3 rounded-r-md cursor-pointer"
          >
            +
          </button>
        </form>
      </div>
      <div className="bg-gray-200 place-items-start rounded-md py-4 px-4 mt-4">
        <h1 className="text-2xl font-bold p-2">Your Tasks</h1>
        <ul className="w-full">
          {todos.map((task) => (
            <TodoTask key={task.id} completed={task.completed} id={task.id} text={task.text} deletTask={() => deletTask(task.id)} editTask={() => editTask(task.id)} toggleCompleteTask={() => toggleCompleteTask(task.id)}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
