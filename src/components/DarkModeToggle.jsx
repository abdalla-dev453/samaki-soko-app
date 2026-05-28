import { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }

    }, [darkMode]);

  return (

    <button
    onClick={() => 
        setDarkMode(!darkMode)
    }
    className='inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-teal-200 hover:bg-teal-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15'
    aria-label="Toggle dark mode"
    >

       {
        darkMode
         ? <Sun size={16} />
         : <Moon size={16} />
       }

       <span className="hidden sm:inline">
        {darkMode ? "Light" : "Dark"}
       </span>

    </button>
  )
}

export default DarkModeToggle;
