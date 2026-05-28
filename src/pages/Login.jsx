import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useAuth from "../hooks/useAuth"
import { ArrowRight, UserRound } from "lucide-react"

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
    <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center px-6 py-12">
      <div className="mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/8 dark:border-white/10 dark:bg-white/6">

        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-300/15 dark:text-teal-200">
          <UserRound size={26} />
        </div>

        <h1 className="mb-2 text-center text-3xl font-black tracking-tight text-slate-950 dark:text-white">
          Seller Login
        </h1>

        <p className="mb-6 text-center text-slate-600 dark:text-slate-300">
          Enter your name to manage today&apos;s catch.
        </p>

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
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          required
        />

        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-3 font-black text-white hover:bg-teal-800 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-white"
        >
          Login
          <ArrowRight size={18} />
        </button>

      </form>

      </div>
    </div>
  )
}

export default Login
