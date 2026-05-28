import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default MainLayout;
