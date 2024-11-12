import React, { useState } from 'react';
import './Todo.css';
import Button from '../Button';
import toast from 'react-hot-toast';

export const TodoForm = ({ closeModal }) => {

  const [formData, setFormData] = useState(null)

  const handleOnInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const resetForm = (e) => {
    e.preventDefault();
    setFormData(null)
  }

  const getFieldValue = (name) => {
    return formData ? formData[name] : ""
  }

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    toast.success('Successfully submitted!')
    setFormData(null)
    closeModal && closeModal();
  }

  return (
    <>
      <pre>
        {JSON.stringify(formData)}
      </pre>
      <form onSubmit={(e) => handleOnFormSubmit(e)} className='todo-form' autoComplete='off'>
        <div className='field-group'>
          <label>
            Task
          </label>
          <input
            type='text'
            maxLength={70}
            // value={formData ? formData?.title : ""}
            value={getFieldValue('title')}
            name="title"
            placeholder='Enter your task title'
            onChange={handleOnInputChange}
          />
        </div>
        <div className='field-group'>
          <label>
            Category
          </label>
          <input
            type='text'
            maxLength={70}
            value={formData ? formData?.category : ""}
            name="category"
            placeholder='Enter your task category'
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
