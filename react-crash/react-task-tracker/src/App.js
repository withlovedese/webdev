import Header from "./components/Header"
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //show form
  const showForm = () => {
    setShowAddTask(!showAddTask)
  }

  //add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks/' ,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])
    // let id = Math.floor(Math.random() * 10000) + 1

    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}` ,{
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}` ,{
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(updatedTask)

    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? 
    {
      ...task, reminder: data.reminder
    } : 
    task))

    // setTasks(tasks.map((task) => task.id === id ? 
    // {
    //   ...task, reminder: !task.reminder
    // } : 
    // task))
  }

  return (
    <Router>
      <div className="container">
      <Header showForm={showForm} showAdd={showAddTask}/>
      
      
      <Routes>
        <Route path="/" element={
          <>
          { showAddTask && <Addtask onAdd={addTask}></Addtask>}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
          ) : (
            'You have no tasks'
          )}
        </>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
    </Router>
    
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
