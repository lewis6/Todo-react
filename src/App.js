import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';
import './App.css';


function App() {
    const [todos, setTodos] = React.useState(
      []
    )
    
    //https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
    const markComplete = (id) => {
      setTodos(
        todos.map(todo => todo.id === id ? 
          {...todo, completed : !todo.completed} : todo)
      )
    }

    //Delete Todo
    const deleteTodo = (id) => {
      axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => setTodos(todos.filter(todo => todo.id !== id))
      )
    }

    const addTodo = (title) => {
      axios.post('http://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
        .then(res => setTodos(todos => [...todos, res.data]))
    }

    React.useEffect(() => {
      axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => setTodos(res.data))
  }, []);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={ addTodo } />
                <Todos todos={todos} markComplete={ markComplete } deleteTodo={ deleteTodo }/> {/* todos is like an attribute of an html tag, but in this case is a prop */}
              </React.Fragment>
            )} />
            <Route path="/about" component={ About }/>
          </div>   
        </div>
      </Router>
    );
}

export default App;
