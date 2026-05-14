import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>

      <Navbar />

      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>

    </div>
  )
}

export default MainLayout;