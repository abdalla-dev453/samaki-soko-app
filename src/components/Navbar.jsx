import { useState } from "react"
import DarkModeToggle from "./DarkModeToggle"

import {
  Link,
  NavLink,
} from "react-router-dom"

import {
  FaBars,
  FaTimes,
} from "react-icons/fa"

import useAuth from "../hooks/useAuth"

function Navbar() {

  const { user } = useAuth()

  const [menuOpen, setMenuOpen] =
    useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-semibold",
      isActive
        ? "bg-teal-900 border hover:border-yellow-400 text-white shadow-sm dark:bg-teal-300 dark:text-teal-950"
        : "text-slate-700 hover:bg-slate-200 hover:text-teal-700  hover:border-yellow-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white",
    ].join(" ")

  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/82 text-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/78 dark:text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Samaki Soko home"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-12 w-12 rounded-full border border-teal-100 bg-white object-cover shadow-sm"
          />

          <div>
            <span className="block text-xl font-black tracking-tight text-teal-950 dark:text-white">
              Samaki Soko
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 sm:block dark:text-teal-300">
              Coastal Market
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/market" className={navLinkClass}>
            Market
          </NavLink>

          {
            user ? (
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>
            ) : (
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
            )
          }

          <div className="ml-2">
            <DarkModeToggle />
          </div>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-teal-950 shadow-sm hover:border-teal-200 hover:bg-teal-50 md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          aria-label="Toggle navigation menu"
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden dark:border-white/10 dark:bg-slate-950">

            <div className="mx-auto flex max-w-7xl flex-col gap-2">

            <NavLink
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/market"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLinkClass}
            >
              Market
            </NavLink>

            {
              user ? (
                <NavLink
                  to="/dashboard"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={navLinkClass}
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={navLinkClass}
                >
                  Login
                </NavLink>
              )
            }

            <div className="pt-2">
              <DarkModeToggle />
            </div>

            </div>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar
