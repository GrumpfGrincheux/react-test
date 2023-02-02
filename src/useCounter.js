import { useCallback, useState } from "react"

export function useCounter() {
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => setCounter(counter + 1), [counter]) 

  const decrement = useCallback(() => setCounter(counter - 1), [counter])
  
  return {
    increment,
    decrement,
    counter
  }
}