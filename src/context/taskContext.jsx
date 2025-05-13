import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks'

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDesc) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDesc
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id != taskId))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

