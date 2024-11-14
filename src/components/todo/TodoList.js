import React, { useEffect } from 'react';
import './Todo.css';
import { PiCheck, PiPencil, PiX } from "react-icons/pi";
import { Tooltip } from 'react-tooltip'
import toast from 'react-hot-toast';
import { useTodo } from '../../context/todoContext';
import { fetchTodoAPI, updateTodoAPI, deleteTodoAPI } from "../../services/todoApis"

export const TodoList = () => {

  const { todoList, setShowDeleteConfirmation, setDeleteTaskData, setTodo, setShowEditTaskModal, setEditTaskData } = useTodo();

  useEffect(() => {
    fetchTodoAPI(setTodo)
  }, [])

  const handleTaskActions = (task, type = "mark-complete") => {

    if (type == "mark-complete") {
      updateTodoAPI(task.id, { completed: true }, setTodo)
      return
    }

    if (type == "edit") {
      setShowEditTaskModal(true)
      setEditTaskData(task)
      return
    }

    if (type == "delete") {
      setShowDeleteConfirmation(true)
      setDeleteTaskData(task)
      return
    }
  }

  return (
    <>
      <div className='todo-list'>
        <ul>
          {
            todoList && todoList.map(((task, index) =>
              <li key={`list_item${index}`}>
                <span>{task?.id})</span> <span className='task-text'>{task?.todo}</span>
                <div className='todo-actions'>
                  <button
                    onClick={() => handleTaskActions(task)}
                    data-tooltip-id="button-check-mark"
                  >
                    <PiCheck />
                  </button>
                  <button
                    onClick={() => handleTaskActions(task, "edit")}
                    data-tooltip-id="button-edit" >
                    <PiPencil />
                  </button>
                  <button
                    onClick={() => handleTaskActions(task, "delete")}
                    data-tooltip-id="button-delete" >
                    <PiX />
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <Tooltip
        id="button-check-mark"
        place="left"
        content="Mark as Completed"
      />


      <Tooltip
        id="button-edit"
        place="top"
        content="Edit"
      />


      <Tooltip
        id="button-delete"
        place="top"
        content="Delete"
      />

    </>
  )
}
