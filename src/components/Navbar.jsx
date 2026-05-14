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

  return (
    <nav className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          Samaki Soko
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex gap-6 items-center">

          <DarkModeToggle />

          <NavLink
            to="/"
            className="hover:text-blue-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/market"
            className="hover:text-blue-300"
          >
            Market
          </NavLink>

          {
            user ? (
              <NavLink
                to="/dashboard"
                className="hover:text-blue-300"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="hover:text-blue-300"
              >
                Login
              </NavLink>
            )
          }

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-2xl"
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

          <div className="md:hidden bg-blue-900 px-4 pb-4 flex flex-col gap-4">

            <NavLink
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/market"
              onClick={() =>
                setMenuOpen(false)
              }
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
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Login
                </NavLink>
              )
            }

          </div>

        )
      }

    </nav>
  )
}

export default Navbar
