import { useState, useContext } from 'react'
import { TaskContext } from '../context/taskContext';

function TaskForm() {

    const { createTask} = useContext(TaskContext)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-700 p-9 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='bg-slate-300 p-3 w-full mb-2 outline-0 focus:scale-105 focus:bg-amber-50 transition hover:outline-2 hover:outline-amber-300'
                autoFocus />
            <textarea placeholder='Escribe la describcion de la tarea' onChange={(e) => setDescription(e.target.value)}
                value={description} rows={3} cols={20} 
                className='bg-slate-300 p-3 w-full mb-2 outline-0 focus:scale-105 focus:bg-amber-50 transition hover:outline-2 hover:outline-amber-300'/>
            <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-600 cursor-pointer'>Guardar</button>
        </form>
        </div>
        
    )
}

export default TaskForm
