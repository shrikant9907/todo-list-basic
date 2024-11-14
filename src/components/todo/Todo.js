
import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { ConfirmationModal } from '../ConfirmationModal';
import { Toaster } from 'react-hot-toast';
import { TodoEditForm } from './TodoEditForm';
import { useTodo } from '../../context/todoContext';

export const Todo = () => {

  const { showDeleteConfirmation, showAddTaskModal, showEditTaskModal, setShowAddTaskModal, setShowEditTaskModal } = useTodo();

  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        </div>
        <TodoList />
        <div className="todo-footer">
          <small>&copy; 2024 All rights reserved. Shrimo Innovations Pvt Ltd.</small>
        </div>
      </div>

      {/* Add Task Modal */}

      {showAddTaskModal &&
        <Modal
          onClose={() => setShowAddTaskModal(false)}
          open={true}
          heading={"Add Task Form"}
        >
          <TodoForm />
        </Modal>
      }

      {showEditTaskModal &&
        <Modal
          onClose={() => setShowEditTaskModal(false)}
          open={true}
          heading={"Edit Task Form"}
        >
          <TodoEditForm />
        </Modal>
      }

      {/* Confimation Modal */}
      {showDeleteConfirmation &&
        <ConfirmationModal title={"the task"} />
      }

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}