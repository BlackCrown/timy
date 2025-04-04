'use client';
// This is a client component
import React from 'react';
import { Edit3, Trash2 } from '@deemlol/next-icons';
// import TodoInput from '@/utils/input';

export default function Todo() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<string>('');

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim() === '') return;
    setTodos((prev) => [...prev, value]);
    setValue('');
  }

  function deletTask(event: React.MouseEvent) {
    event.preventDefault();
    const id = +event.currentTarget.id;

    setTodos((prevList) => prevList.filter((_, index) => index !== id));
  }

  function editTask(event: React.MouseEvent) {
    event.preventDefault();
    const id = +event.currentTarget.id;
    const newTask = prompt('Enter the new task', todos[id]);
    if (newTask) {
      setTodos((prevList) => {
        const updatedList = [...prevList];
        updatedList[id] = newTask;
        return updatedList;
      });
    }
  }

  return (
    <div>
      <h1>Todo Page</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <label className="block my-2" htmlFor="task">
            Add your task:{' '}
          </label>
          <input
            id="task"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="inline-block p-0.5 text-center rounded-l-md border-2 border-blue-900 focus:border-2 focus:rouded-none "
            placeholder="Enter a task"/>
          <button
            type="submit"
            onClick={addTask}
            className="bg-blue-900 text-white py-1 -ml-1 px-3 rounded-r-md cursor-pointer">
            +
          </button>
        </form>
      </div>
      <div className='bg-gray-200 place-items-center  rounded-md py-4 px-4 mt-4'>
        <h1 className='text-2xl font-bold p-2'>Your Tasks</h1>
        <ul className="w-full">
          {todos.map((task, index) => (
            <div
              className="my-2 bg-gray-400 p-1 rounded-md"
              key={index}>
              <li className="flex mx-auto max-w-xl justify-between break-all">
                {task}
                <div className="flex ml-6 gap-5">
                  <button
                    onClick={deletTask}
                    className="text-white cursor-pointer"
                    id={index.toString()}>
                    <Trash2 className="text-red-100 fill-red-400" />
                  </button>
                  <button
                    onClick={editTask}
                    className=" text-white cursor-pointer px-1.5"
                    id={index.toString()}>
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
