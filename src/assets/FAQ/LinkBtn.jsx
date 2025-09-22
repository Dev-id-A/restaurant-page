import { Link } from "react-router";
import menuJson from "../Json/MenuJson";

function LinkBtn({lang}) {
  return (
    <div className="flex h-fit w-4/5 mt-10">
      <Link to={"/"} className="flex justify-center align-center border-3 border-royal w-20 text-2xl hover:scale-110 animation-all duration-500">
            {menuJson.home[lang]}
      </Link>
    </div>
  )
}

export default LinkBtn