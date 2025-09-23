import { Link } from "react-router"
import homeLang from "../Json/HomeJson"

function FAQBtn({lang}) {
  return (
    <Link to={"faq"} className="font-bold border-3 border-royal rounded-lg p-5 w-1/2 hover:scale-110 animation-all duration-300">
      {homeLang.faq[lang]}</Link>
  )
}

export default FAQBtn