import { useContext } from 'react'
import { TaskContext } from '../context/taskContext'
import TaskCard from './TaskCard'

function Tasklist() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-2xl font-bold text-center'>No hay tareas aun</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {
        tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))
      }
    </div>
  )
}

export default Tasklist
