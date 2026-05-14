import { useEffect, useState } from 'react';

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
    className='bg-white text-blue-950 px-3 py-1 rounded-lg'
    >
        
       {
        darkMode
         ? "Light Mode"
         : "Dark Mode"
       }

    </button>
  )
}

export default DarkModeToggle;
