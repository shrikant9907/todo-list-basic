
import React from 'react';
import './todo/Todo.css';
import Button from './Button';
import Modal from './Modal';
import { useTodo } from '../context/todoContext';
import { deleteTodoAPI } from '../services/todoApis';

export const ConfirmationModal = ({ title }) => {

    const { setShowDeleteConfirmation, setTodo, deleteTaskData } = useTodo();

    const handleOnDeleteTask = () => {
        deleteTodoAPI(deleteTaskData.id, setTodo, setShowDeleteConfirmation(false));
    }

    return (
        <>

            {/* Confimation Modal */}
            <Modal
                onClose={() => setShowDeleteConfirmation(false)}
                open={true}
                heading={"Delete Confirmation Modal"}
                footerComponent={<div className='delete-modal-buttons'>
                    <Button onClick={() => setShowDeleteConfirmation(false)}>Close</Button>
                    <Button onClick={handleOnDeleteTask} className={"btn-error"}>Delete</Button>
                </div>}
            >
                Are you sure you want to delete {title}?
            </Modal>
        </>
    )
} 