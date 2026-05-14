import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useAuth from "../hooks/useAuth"

function Login() {

  const [name, setName] = useState("")

  const { login } = useAuth()

  const navigate = useNavigate()

  function handleSubmit(e) {

    e.preventDefault()

    const fakeUser = {
      id: 1,
      name,
      role: "seller",
    }

    login(fakeUser)

    navigate("/dashboard")
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Fisherman Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login
