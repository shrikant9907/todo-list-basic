import React from 'react';
import './Todo.css';
import { PiCheck, PiPencil, PiX } from "react-icons/pi";
import { Tooltip } from 'react-tooltip'
import toast from 'react-hot-toast';


export const TodoList = ({ data, onDelete, onComplete, onEdit }) => {

  const taskList = data;

  const handleTaskActions = (task, type = "mark-complete") => {

    if (type == "mark-complete") {
      // Mark as Complete / Incomplete
      onComplete ? onComplete(task) : toast.error("You didn't passed the onComplete Prop")
      return
    }

    if (type == "edit") {
      // Edit Task
      onEdit && onEdit(task)
      return
    }

    if (type == "delete") {
      // Delete Task
      onDelete && onDelete(task)
      return
    }
  }

  return (
    <>
      <div className='todo-list'>
        <ul>
          {
            taskList && taskList.map(((task, index) =>
              <li key={`list_item${index}`}>
                {task?.id} - {task?.todo}
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
