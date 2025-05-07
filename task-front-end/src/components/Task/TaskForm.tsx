import React, { FormEvent, useEffect, useState } from "react"
import { TaskFormWrapper, TaskFormInput, TaskFormTextArea, TaskFormLabel, TaskFormGroup, TaskFormTitle, TaskFormTitleWrapper } from "../../styles/Task.styles"
import { StyledButton, TaskFormButtonWrapper } from "../../styles/Button.styles"
import { useTaskContext } from "../../context/Tasks/useTaskContext"
import { useNavigate, useParams } from "react-router-dom"
import { TaskItem } from "../../types/task/taskTypes"
import { StyledEdit } from "../../styles/StyledIcon.styles"
import { Tooltip } from 'react-tooltip'

const TaskForm = ({ isViewMode }: { isViewMode: boolean }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { tasks, dispatch, taskNumber, incrementCounter } = useTaskContext()
    const [isReadOnly, setIsReadOnly] = useState(!isViewMode)
    const [item, setItem] = useState<TaskItem>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (isViewMode && id) {
            const taskItem = tasks.find((task) => task.id === id)
            if (taskItem) {
                setItem(taskItem)
                setTitle(taskItem.title);
                setDescription(taskItem.description || '')
            }
        }
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (isViewMode && item) {
            dispatch({ type: 'UPDATE_TASK', payload: { ...item, title, description } })
            navigate('/')
        }
        else {
            const newTask = {
                title: title,
                description: description,
                taskNumber: taskNumber
            }
            incrementCounter()
            dispatch({ type: 'ADD_TASK', payload: newTask })
            navigate('/')
        }
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleEdit = () => {
        setIsReadOnly(false)
    }

    return (<div>
        <TaskFormWrapper >
            <TaskFormGroup>
                {
                    isViewMode &&
                    <TaskFormTitleWrapper>
                        <TaskFormTitle>#{item?.taskNumber}. {item?.title}</TaskFormTitle>
                        <StyledEdit data-tooltip-id="edit-task"
                            data-tooltip-content="Edit task"
                            onClick={handleEdit}
                        />
                        <Tooltip id='edit-task' />
                    </TaskFormTitleWrapper>
                }

                <TaskFormLabel htmlFor="task_input">Add a title *</TaskFormLabel>
                <TaskFormInput readOnly={isReadOnly} id="task_input" type='text' placeholder="Enter title"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
            </TaskFormGroup>
            <TaskFormGroup>
                <TaskFormLabel htmlFor="task_desc">Add task description</TaskFormLabel>
                <TaskFormTextArea id="task_desc"
                    readOnly={isReadOnly}
                    placeholder="Enter task description"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
            </TaskFormGroup>
            <TaskFormButtonWrapper>
                <StyledButton type='button' $variant="secondary" onClick={handleCancel}>Cancel Changes</StyledButton>
                <StyledButton type="submit"
                    onClick={handleSubmit}
                    disabled={isReadOnly}>
                    Save Task
                </StyledButton>
            </TaskFormButtonWrapper>
        </TaskFormWrapper>
    </div>)
}
export default TaskForm