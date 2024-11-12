import React from 'react';
import './Todo.css';
import Button from '../Button';

export const TodoForm = () => {

  return (
    <>
      <form onSubmit={() => console.log('Form submitted')} className='todo-form'>
        <div className='field-group'>
          <label>
            Task
          </label>
          <input
            type='text'
            value=""
            name="title"
            placeholder='Enter your task title'
          />
        </div>
        <div className='field-group'>
          <label>Description</label>
          <textarea placeholder='Enter your task details.'>


          </textarea>
        </div>

        <div className='todo-form-actions'>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  )
}
