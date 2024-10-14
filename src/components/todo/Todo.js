import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

const Container = styled.main`
  padding: 20px;
  background: #efefef;
  max-width: 400px;
  margin:  50px auto 0 auto;
`;

export const Todo = () => {
  return (
    <>
      <Container className='todo-list-container'>
            {/* Form */}
                <TodoForm />
                <TodoList />
            {/* Listing */}
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
