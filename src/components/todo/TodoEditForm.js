import React, { useState } from 'react';
import './Todo.css';
import Button from '../Button';
import { updateTodoAPI } from '../../services/todoApis';
import { useTodo } from '../../context/todoContext';

export const TodoEditForm = () => {

  const { setTodo, setShowEditTaskModal, editTaskData } = useTodo();

  const [formData, setFormData] = useState(editTaskData)

  const handleOnInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const resetForm = (e) => {
    e.preventDefault();
    setFormData(editTaskData)
  }

  const getFieldValue = (name) => {
    return formData ? formData[name] : ""
  }

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      todo: formData?.todo,
      completed: false,
      userId: 1,
    }

    updateTodoAPI(editTaskData.id, requestData, setTodo)

    setShowEditTaskModal(false)
  }

  return (
    <>
      <form onSubmit={(e) => handleOnFormSubmit(e)} className='todo-form' autoComplete='off'>
        <div className='field-group'>
          <label>
            Task
          </label>
          <input
            type='text'
            maxLength={70}
            value={getFieldValue('todo')}
            name="todo"
            placeholder='Enter your task todo'
            onChange={handleOnInputChange}
          />
        </div>
        <div className='field-group'>
          <label>Description</label>
          <textarea
            name="description"
            maxLength={2000}
            onChange={handleOnInputChange}
            value={formData ? formData?.description : ""}
            placeholder='Enter your task details.'>
            {formData?.description}
          </textarea>
        </div>

        <div className='todo-form-actions'>
          <Button onClick={resetForm}>Reset</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  )
}
