import {
  useState,
} from "react"
import AuthContext from "./authContext"

function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    try {
      const storedUser =
        localStorage.getItem("samakiUser")

      return storedUser
        ? JSON.parse(storedUser)
        : null
    } catch {
      localStorage.removeItem("samakiUser")

      return null
    }
  })

  function login(userData) {

    setUser(userData)

    localStorage.setItem(
      "samakiUser",
      JSON.stringify(userData)
    )
  }

  function logout() {

    setUser(null)

    localStorage.removeItem("samakiUser")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider,
}
