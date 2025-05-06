import { useContext } from "react"
import { TaskContext } from "./TaskContext"

export const useTaskContext = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('No provider for task context')
    }
    return context
}