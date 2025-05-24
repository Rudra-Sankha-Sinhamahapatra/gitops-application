import { Todos } from "@/todos/todos";
import { Todo } from "@/types/Todo.types";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border border-violet-500 p-4 space-y-2">
      <h1>My <span className="font-semibold bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text"> TodoList </span> Test</h1>
      <p className="text-sm font-thin">TodoList consists of various tasks</p>
      <div>
        {Todos.map((todo: Todo, index: number)=>{
        return  <div key={index} className="space-y-1">
          <div>
          {todo.id}. <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text">{todo.title}</span>
          </div>
          <div className="font-medium">
           - {todo.description}
          </div>
         </div>
        })}
      </div>
      </div>
      </div>
    </>
  );
}
