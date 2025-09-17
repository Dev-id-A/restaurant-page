import { Link } from "react-router";
import menuJson from "../Json/MenuJson";

function LinkBtn({lang}) {
  return (
    <Link to={"/"} className="absolute border-3 border-royal grid place-items-center left-20 h-10 w-30">
          <p className="text-xl">{menuJson.home[lang]}</p>
    </Link>
  )
}

export default LinkBtn