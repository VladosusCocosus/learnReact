import './App.css';
import { useState } from 'react';


const Tasks = ({ tasks, setTasks }) => {
    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        setTasks(filteredTasks)
    }
    return (
        <div className={"tasks"}>
            {tasks.map((task) => {
                return (<div className={"task"}>
                    <span>{task.id}. {task.description}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>)
            })}
        </div>
    )
}

const InputTasks = ({ setTasks, tasks }) => {
    const [description, setDescription] = useState("")
    const getTask = (_description) => {
        return {
            id: tasks.length + 1,
            description: _description,
            created_at: new Date()
        }
    }

    const createTask = () => {
        const tasksCopy = [...tasks]
        tasksCopy.push(getTask(description))
        setTasks(tasksCopy)
    }
    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={() => createTask()}>Save</button>
        </div>
    )
}

function App() {
    const [tasks, setTasks] = useState([])
    return (
        <div key={`key-${tasks.length}`}>
            <Tasks setTasks={setTasks} tasks={tasks}/>
            <InputTasks setTasks={setTasks} tasks={tasks}/>
        </div>
    );
}

export default App;
