import React from 'react'

export default function todo() {
  return (
    <section className='bg-principal-light h-[calc(100vh-(80px))] rounded-t-3xl px-8 py-6'>
      <h1>Todo List</h1>
      <div>
        <label className='block' htmlFor="todo">Adcionar atividade:</label>
        <div className='relative'>
        <input type="text" id='todo' className='w-[80%] h-[30px] rounded-l-xl align-center pl-2 mt-2 border-y-2 border-principal-dark'/>
        <button className='bg-white rounded-r-xl border-y-2 border-l-2 border-principal-dark w-[30px] h-[30px] mt-2 absolute top-0 self-middle'>+</button>
        </div>
      </div>

      <div>
        <ul>
          <li className=''>Arrumar o quarto</li>
          <li>Compras</li>
          <li>Limpar caixa de areia do gato</li>
        </ul>
      </div>

    </section>
  )
}
