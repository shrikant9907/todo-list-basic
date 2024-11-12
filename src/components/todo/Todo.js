
import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { ConfirmationModal } from '../ConfirmationModal';
import { Toaster } from 'react-hot-toast';

// List Task (Add / Remove)
// Modal Close / Open / Toggle
// Form Data Manage

export const Todo = () => {

  const [showAddTaskModal, setShowAddTaskModal] = useState(false)

  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        </div>
        <TodoList />
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