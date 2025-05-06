import React, { FormEvent, useState } from "react"
import { TaskFormWrapper, TaskFormInput, TaskFormTextArea, TaskFormLabel, TaskFormGroup } from "../../styles/Task.styles"
import { AddTaskButton, TaskFormButtonWrapper } from "../../styles/Button.styles"
import { useTaskContext } from "../../context/Tasks/useTaskContext"


const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { dispatch, taskNumber, incrementCounter } = useTaskContext()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newTask = {
            title: title,
            description: description,
            taskNumber: taskNumber
        }
        incrementCounter()
        dispatch({ type: 'ADD_TASK', payload: newTask })
    }

    return (<div>
        <TaskFormWrapper onSubmit={handleSubmit}>
            <TaskFormGroup>
                <TaskFormLabel htmlFor="task_input">Add a title *</TaskFormLabel>
                <TaskFormInput id="task_input" type='text' placeholder="Enter title"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
            </TaskFormGroup>
            <TaskFormGroup>
                <TaskFormLabel htmlFor="task_desc">Add task description</TaskFormLabel>
                <TaskFormTextArea id="task_dec" placeholder="Enter task description"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
            </TaskFormGroup>
            <TaskFormButtonWrapper>
                <AddTaskButton type="submit">
                    Create Task
                </AddTaskButton>
            </TaskFormButtonWrapper>
        </TaskFormWrapper>
    </div>)
}
export default TaskForm