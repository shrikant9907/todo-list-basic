
import React, { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { ConfirmationModal } from '../ConfirmationModal';
import toast, { Toaster } from 'react-hot-toast';
import { addTodoAPI, fetchTodoAPI } from '../../services/todoApis';


// List Task (Add / Remove)
// Modal Close / Open / Toggle
// Form Data Manage

export const Todo = () => {

  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [todo, setTodo] = useState(null)

  fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(console.log);

  useEffect(() => {
    fetchTodoAPI(setTodo)

    addTodoAPI({
      todo: 'Use DummyJSON in the project',
      completed: false,
      userId: 1,
    }, setTodo)
  }, [])

  const todoList = todo ? todo.todos : [];

  const handleOnCompleteTask = (data) => {
    toast('Marked as completed')
  }

  const handleOnEditTask = (data) => {
    toast('Editing task')
  }

  const handleOnDeleteTask = (data) => {
    toast('Asked for deletion')
    console.log('on delete', data)
  }

  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        </div>
        <TodoList
          data={todoList}
          onDelete={handleOnDeleteTask}
          onEdit={handleOnEditTask}
          onComplete={handleOnCompleteTask}
        />
      </div>

      {/* Add Task Modal */}

      {showAddTaskModal &&
        <Modal
          onClose={() => setShowAddTaskModal(false)}
          open={showAddTaskModal}
          heading={"Add Task Form"}
        >
          <TodoForm closeModal={() => setShowAddTaskModal(false)} />
        </Modal>
      }

      {/* Confimation Modal */}
      {/* <ConfirmationModal title={"the account"} /> */}

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}