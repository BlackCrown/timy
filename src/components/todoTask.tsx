import React from 'react'
import { Edit3, Trash2, CheckCircle, Circle } from '@deemlol/next-icons';

interface iTaskFunc{completed: boolean, id: number, text: string, deletTask: (id: number) => void, editTask: (id: number) => void, toggleCompleteTask: (id: number) => void}

const TodoTask: React.FC<iTaskFunc> =({completed, id, text, deletTask, editTask, toggleCompleteTask}) => {

  return (
    <div
              className={
                completed
                  ? 'my-2 bg-red-400 p-2 rounded-md hover:bg-red-600'
                  : 'my-2 bg-gray-400 p-2 rounded-md hover:bg-blue-100'
              }
              key={id}
            >
              <li className="flex mx-auto max-w-[900px] justify-between break-all">
                <div className=' my-0 py-0 '
                  onClick={() => toggleCompleteTask(id)}>{
                  completed ? <CheckCircle width='21px' className='text-red-500 bg-transparent  cursor-pointer'
                /> : <Circle width='21px' className=' cursor-pointer'/>}
                </div>
                {text}
                <div className="flex ml-2 gap-2">
                  <div
                    onClick={() => deletTask(id)}
                    className="text-white cursor-pointer"
                    id={`${id}`}
                  >
                    <Trash2 className="text-red-100 fill-red-400" />
                  </div>
                  <button
                    onClick={() => editTask(id)}
                    className=" text-white cursor-pointer px-1.5"
                    id={`${id}`}
                  >
                    <Edit3
                      size={25}
                      className="text-green-900 fill-green-300"
                    />
                  </button>
                </div>
              </li>
            </div>
  )
}

export default TodoTask