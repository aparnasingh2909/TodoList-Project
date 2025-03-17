import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { Container } from 'reactstrap';
import Header from './components/Header';

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => setTasks([...tasks, task]);

  //takes index of the task to be deleted as argument and creates a new array containing only the tasks whose index!=index of the task to be deleted
  //setTasks fn updates the tasks state with the new array that doesn't include the task we wanted to delete
//   const deleteTask = (index) => {
//     setTasks(tasks.filter((task, i) => i !== index));
// };

function deleteTask(index)
{
   setTasks(tasks.filter((task,i)=> i!==index));
}


  return (
    <Container className='text-center py-5'>
        <Header/>
        <TodoForm className="pt-3" addTask={addTask} /> 
        <TodoList tasks={tasks} deleteTask={deleteTask} />
    </Container>
);
}

export default App;
