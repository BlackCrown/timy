import Link from "next/link"

export default function Home(){
  return (
    <main className="bg-principal-light h-[calc(100vh-(80px))] rounded-3xl px-8 py-6">

        <header className="flex content-center place-content-between py-8">
        <div>
          <h1>Today</h1>
          <p>Segunda, 05/2024, 11:00</p>
        </div >
        <div className="self-center">
            <p>Atividades</p>
        </div>
        </header>

        <section className="flex py-4 place-content-evenly">
        <div className="bg-white p-3 h-[150px] w-[200px] rounded-[24px] ">
          <h2>Atividade semanal</h2>
        </div>
        <div className="bg-white p-3 h-[150px] w-[200px] rounded-[24px] ">
          <h2>Horas livres hj</h2>
        </div>
        <div className="bg-white p-3 h-[150px] w-[200px] rounded-[24px] ">
          <h2>Agenda</h2>
        </div>
      </section>
  
      <section className="grid grid-cols-2 gap-10 py-4 place-content-around">
        <Link href='todo' className="bg-white p-9 rounded-[34px]">
          <h2>Todo List</h2>
          
        </Link>

        <div className="bg-white p-9 rounded-[34px]">
          <h2>Atividades importantes</h2>
        </div>
      </section>
    </main>
  )
}

