
import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { ConfirmationModal } from '../ConfirmationModal';

export const Todo = () => {
  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button>Add Task</Button>
        </div>
        <TodoList />
      </div>

      {/* Add Task Modal */}
      <Modal
        open={true}
        heading={"Add Task Form"}
      >
        <TodoForm />
      </Modal>

      {/* Confimation Modal */}
      <ConfirmationModal title={"the account"} />
    </>
  )
}