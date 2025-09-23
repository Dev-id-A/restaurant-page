import { Link } from "react-router";
import menuJson from "../Json/MenuJson";

function LinkBtn({lang}) {
  return (
    <div className="flex h-fit w-4/5 mt-10">
      <Link to={"/"} className="flex justify-center items-center border-2 rounded-lg border-royal w-25 text-xl lg:text-3xl font-yrsa py-1 lg:p-2
      hover:scale-110 animation-all duration-500">
            {menuJson.home[lang]}
      </Link>
    </div>
  )
}

export default LinkBtn