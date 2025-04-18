'use client';
// This is a client component
import React from 'react';
import TodoTask from '@/components/todoTask';


interface iTask {
  text: string;
  id: number;
  completed: boolean;
}

// const todosTeste: iTask[] = [
//   { text: 'Task 1', id: 1, completed: false },
//   { text: 'Task 2', id: 2, completed: false },
//   { text: 'Task 3', id: 3, completed: false },
// ];

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
      <div className='py-6 px-2'>
        <form className='flex flex-col justify-center items-center'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="block my-2" htmlFor="task">
            Add your task:{' '}
          </label>
          <div className='flex'>
          <input
            id="task"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="p-0.5 text-center rounded-l-md border-2 min-w-fit sm:min-w-[500px] max-w-[580px] border-blue-900"
            placeholder="Enter a task"
          />
          <button
            type="submit"
            onClick={addTask}
            className="bg-blue-900 hover:bg-green-600 text-white py-1 -ml-1 px-3 rounded-r-md cursor-pointer"
          >
            +
          </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-200 mx-auto rounded-md py-4 px-4 mt-4 max-w-[550px] md:max-w-[700px] lg:max-w-[1000px]">
        <h1 className="flex text-2xl place-self-center font-bold p-2">Your Tasks</h1>
        <ul className="w-full">
          {todos.map((task) => (
            <TodoTask key={task.id} completed={task.completed} id={task.id} text={task.text} deletTask={() => deletTask(task.id)} editTask={() => editTask(task.id)} toggleCompleteTask={() => toggleCompleteTask(task.id)}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
