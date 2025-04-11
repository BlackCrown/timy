'use client';
// This is a client component
import React from 'react';
import { Edit3, Trash2, CheckCircle, Circle } from '@deemlol/next-icons';

interface iTask {
  text: string;
  id: number;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = React.useState<iTask[]>([]);
  const [value, setValue] = React.useState<string>('');

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

  function deletTask(id: number) {
    setTodos(todos.filter((element) => element.id !== id));
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
            <div
              className={
                task.completed
                  ? 'my-2 bg-red-400 p-1 rounded-md'
                  : 'my-2 bg-gray-400 p-1 rounded-md'
              }
              key={task.id}
            >
              <li className="flex mx-auto max-w-xl justify-between break-all">
                <div className=' my-0 py-0 '
                  onClick={() => toggleCompleteTask(task.id)}>{
                  task.completed ? <CheckCircle width='21px' className='text-red-500'
                /> : <Circle width='21px'/>}
                </div>
                {task.text}
                <div className="flex ml-6 gap-5">
                  <div
                    onClick={() => deletTask(task.id)}
                    className="text-white cursor-pointer"
                    id={`${task.id}`}
                  >
                    <Trash2 className="text-red-100 fill-red-400" />
                  </div>
                  <button
                    onClick={() => editTask(task.id)}
                    className=" text-white cursor-pointer px-1.5"
                    id={`${task.id}`}
                  >
                    <Edit3
                      size={25}
                      className="text-green-900 fill-green-300"
                    />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
