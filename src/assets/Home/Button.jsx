import { Link } from "react-router"

function Button({children,to}) {
  return (

      <Link to={to} className="relative flex items-center justify-center border 
      cursor-pointer h-160 w-full group pb-5 overflow-hidden hover:scale-101">
            
      <div className="absolute inset-0 bg-[url('/img/home/table.jpg')] bg-cover bg-center 
      transition-all duration-1000 ease-in-out group-hover:scale-110"></div>

      <div className="absolute inset-0 bg-black/70 hover:bg-black/50"></div>

            <h3 className="text-6xl group-hover:scale-110 transition-all duration-500 z-5">
                {children}
            </h3>

      </Link>
      
  )
}

export default Button