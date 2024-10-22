import React, { useContext } from 'react';
import styled from 'styled-components';
import './Todo.css';
import { dummyTodoData } from './dummyData';
import Button from '../Button';
import { MyThemeContext } from '../../App';

const Container = styled.main`
  padding: 20px;
  background: #efefef;
  max-width: 700px;
  margin:  50px auto 0 auto;
`;

const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  padding: 5px 10px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50px;
`;

export const TodoList = ({}) => {

  // Receiving Context Datav (3)
  const myTheme = useContext(MyThemeContext)
  console.log('testMode', myTheme)
  
  const todos = dummyTodoData;


  // ?. Optional Chaining
  // Key with Map
  // 1. pass item id as key <ListItem key={todo.id}>
  // 2. with litrals and key <ListItem key={`todo_item${index}`}>
  // 3. generic id | index + title

  return (
    <>
      <Container className={`todo-list-container theme_${myTheme?.mode}`}>
        {
          todos && todos.length > 0 && todos.map((todo, index) => {

            const todoTitle = todo?.title;
            const tag = todo?.completed ? "Completed" : "Todo";

            return <ListItem key={index + todo.title}>
              <div> <h4>{todoTitle}</h4>
                <Tag>{tag}</Tag></div>
              <div><Button>Edit</Button>
                <Button>Delete</Button></div>
            </ListItem>
          })
        }

        { todos && todos.length === 0 && <div>
              You don't have any task yet.
            </div>}
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
