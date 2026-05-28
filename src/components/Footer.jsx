
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-300">
        <div>
          <p className="font-black text-slate-900 dark:text-white">
            Samaki Soko
          </p>
          <p>
            Premium coastal seafood, sourced with confidence. <br />
            Your digital fish market - view the day's catch, connect with <br />local fishermen, and savor the freshest flavors from the sea. <br />
            <p className="font-bold text-green-700 dark:text-teal-300">Claim your Plate Now!</p>
          </p>
        </div>

        <p className="font-semibold text-teal-800 dark:text-teal-300">
         • Shimoni • Vanga • Msambweni <br />• etc..
        </p>
      </div>

      <div className="flex flex-col items-center justify-around gap-4  px-6 py-4 text-sm text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:flex">
        <p className="text-center text-xs text-slate-500  dark:text-slate-400">
          &copy; 2026 Samaki Soko. All rights reserved.
        </p>

        <div>
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Contacts:</h4>
        <p className="blocktext-center text-xs text-teal-600 dark:text-teal-500">
          Email: <a href="mailto:KZBqP@example.com">abdallamsema69@gmail.com</a> <br />
          Tel: +254_112_898_506 || +254_116_990_735
        </p>
       </div> 
      </div>
    </footer>
  )
}

export default Footer;
