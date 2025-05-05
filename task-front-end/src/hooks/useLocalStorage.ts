import { useEffect, useState } from "react"

//custom hook to read and update localstorage for any key
function useLocalStorage<T>(key: string, initialValue: T) {
    const readValue = () => {
        try {
            const val = localStorage.getItem(key)
            return val ? JSON.parse(val) as T : initialValue
        } catch (error) {
            console.warn(`Error in reading value for ${key}`)
            return initialValue
        }
    }

    const [storedValue, setStoredValue] = useState(readValue)

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.warn(`Error in setting local storage for ${key}`)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue] as const
}
export default useLocalStorage