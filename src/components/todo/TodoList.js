import React from 'react';
import './Todo.css';
import { PiCheck, PiPencil, PiX } from "react-icons/pi";
import { Tooltip } from 'react-tooltip'

export const TodoList = ({ }) => {

  const taskList = [1, 2, 3, 4, 5];

  return (
    <>
      <div className='todo-list'>
        <ul>
          {
            taskList && taskList.map(((task, index) =>
              <li key={`list_item${index}`}>
                {task} Test item text
                <div className='todo-actions'>
                  <button data-tooltip-id="button-check-mark" >
                    <PiCheck />
                  </button>
                  <button data-tooltip-id="button-edit" >
                    <PiPencil />
                  </button>
                  <button data-tooltip-id="button-delete" >
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
