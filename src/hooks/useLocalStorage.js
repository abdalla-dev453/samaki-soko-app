import { useState } from "react"

const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    if (!key) {
      return initialValue
    }

    try {
      const item = localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  function setValue (value) {
    setStoredValue((currentValue) => {
      const valueToStore =
        value instanceof Function
          ? value(currentValue)
          : value

      if (key) {
        localStorage.setItem(
          key,
          JSON.stringify(valueToStore)
        )
      }

      return valueToStore
    })
  }

  return[storedValue, setValue]

}

export default useLocalStorage;
