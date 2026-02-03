import React, { FormEvent, useEffect, useState } from "react"
import { TaskFormWrapper, TaskFormInput, TaskFormTextArea, TaskFormLabel, TaskFormGroup, TaskFormTitle, TaskFormTitleWrapper } from "../../styles/Task.styles"
import { StyledButton, TaskFormButtonWrapper } from "../../styles/Button.styles"
import { useTaskContext } from "../../context/Tasks/useTaskContext"
import { useNavigate, useParams } from "react-router-dom"
import { TaskItem, TaskStatus } from "../../types/task/taskTypes"
import { StyledEdit } from "../../styles/StyledIcon.styles"
import { Tooltip } from 'react-tooltip'

const initialFormState = {
    id: '',
    title: '',
    description: '',
    taskNumber: 0,
    status: 'TODO' as TaskStatus,
    createdAt: '',
}
const TaskForm = ({ isViewMode }: { isViewMode: boolean }) => {
    const { tasks, dispatch, taskNumber, incrementCounter } = useTaskContext()
    const [isReadOnly, setIsReadOnly] = useState(isViewMode)
    const [item, setItem] = useState<TaskItem>(initialFormState)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (isViewMode && id) {
            const taskItem = tasks.find((task) => task.id === id)
            if (taskItem) {
                setItem(taskItem)
            }
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isViewMode && item) {
            dispatch({ type: 'UPDATE_TASK', payload: item })
            navigate('/')
        }
        else {
            const newTask = {
                title: item.title,
                description: item.description,
                taskNumber: taskNumber
            }
            incrementCounter()
            dispatch({ type: 'ADD_TASK', payload: newTask })
            navigate('/')
        }
    }

    const handleFormChange = (e: FormEvent) => {
        const { name, value } = e.target as HTMLInputElement
        setItem((prev) => ({ ...prev, [name]: value }))
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleEdit = () => {
        setIsReadOnly(false)
    }

    return (<div>
        <TaskFormWrapper>
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
                <TaskFormInput name="title" readOnly={isReadOnly} id="task_input" type='text' placeholder="Enter title"
                    value={item.title} onChange={handleFormChange} />
            </TaskFormGroup>
            <TaskFormGroup>
                <TaskFormLabel htmlFor="task_desc">Add task description</TaskFormLabel>
                <TaskFormTextArea
                    name="description"
                    id="task_desc"
                    readOnly={isReadOnly}
                    placeholder="Enter task description"
                    onChange={handleFormChange}
                    value={item.description} />
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