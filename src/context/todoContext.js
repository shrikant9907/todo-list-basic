import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

    const [showAddTaskModal, setShowAddTaskModal] = useState(false)
    const [showEditTaskModal, setShowEditTaskModal] = useState(false)
    const [todo, setTodo] = useState(null)
    const [editTaskData, setEditTaskData] = useState(null)
    const [deleteTaskData, setDeleteTaskData] = useState(null)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

    const todoList = todo ? todo.todos : [];

    const todoValue = {
        showAddTaskModal,
        showEditTaskModal,
        todo,
        todoList,
        editTaskData,
        deleteTaskData,
        showDeleteConfirmation,
        setShowAddTaskModal,
        setShowEditTaskModal,
        setTodo,
        setEditTaskData,
        setDeleteTaskData,
        setShowDeleteConfirmation
    }

    return (

        <TodoContext.Provider value={todoValue}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

export const useTodo = () => useContext(TodoContext);