import Header from "./components/Header"
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React',
        day: 'tuesday',
        reminder: true
    },
    {
        id: 2,
        text: 'financial aid logistics',
        day: 'monday',
        reminder: false
    },
    {
        id: 3,
        text: 'Call Aima',
        day: 'wednesday',
        reminder: true
    },
    {
        id: 4,
        text: 'Film video',
        day: 'friday',
        reminder: false
    },
    
  ])

  //Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
    
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
