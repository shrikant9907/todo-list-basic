import React, { useState } from 'react';
import styled from 'styled-components';
import './Todo.css';

const Container = styled.main`
  padding: 20px;
  background: #efefef;
  max-width: 400px;
  margin:  50px auto 0 auto;
`;

const InputStyled = styled.input`
  padding: 10px 20px;
  background: #efefef;
  width: 100%;
  border: 1px solid #ccc;
  margin:  50px auto 0 auto;
`;

export const TodoForm = () => {
  // {}
  // []
  // null
  // 0
  // ""
  // const [value, function] = useState(initialValue) // Destruture
  const [myname, setMyName] = useState("")
  const [myemail, setMyEmail] = useState("")

  // Show / Hide
  const [showForm, setShowForm] = useState(false) // Boolean true / false

  // Virtual DOM
 
  const handleOnChangeField = (event) => {
    // const value = event.target.value; // Input value receive
    const { name, value } = event.target;
    if (name === 'your_name') {
      setMyName(value) // State update 
    } else {
      setMyEmail(value) // State update 
    }
  }

  const handleShowHideForm = (text) => {
    // !true = false
    // !false = true
    setShowForm(!showForm);
    console.log('button clicked', text)
  }

  // useState
  // useRef
  return (
    <>
      <Container className='todo-list-container'>
        <button onClick={() => handleShowHideForm('show')}>Show / Hide Form</button>
        {/* <button onClick={handleShowHideForm}>Show / Hide Form</button> */}
        {
          showForm && <form>
            <div>
              <InputStyled
                type='text'
                placeholder='Enter your full name'
                name='your_name'
                value={myname}
                onChange={handleOnChangeField}
              />
              <InputStyled
                type='email'
                placeholder='Enter your full email'
                name='your_email'
                value={myemail}
                onChange={handleOnChangeField}
              />
            </div>
          </form>
        }

      </Container>
    </>
  )
}


// Style Component

// Bootstrap
// Tailwind CSS
// SCSS / sass
// Material UI
// Ant
