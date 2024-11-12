
import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';

export const Todo = () => {
  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
        <h1>My Todo App</h1>
        <Button>Add Task</Button>
        </div>
        <TodoForm />
        <TodoList />
      </div>
     
    </>
  )
}