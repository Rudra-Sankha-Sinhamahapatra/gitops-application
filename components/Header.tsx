"use client"

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center p-4">
            <div className="flex flex-col items-center gap-2">
               <h1 className="text-2xl font-bold">My TodoList</h1>
               <p className="text-sm font-thin">My Todolist consists of various tasks</p>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={()=>{
                    alert("Add Task will be implemented here")
                }}>Add Task</button>
            </div>
        </div>
    )
}