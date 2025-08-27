import { Link } from "react-router"

function Button({children,to}) {
  return (
    <Link to={to} >
        <button className="h-20 w-60 border cursor-pointer rounded-lg">
            <h3 className="text-4xl">
                {children}
            </h3>
        </button>
    </Link>
  )
}

export default Button