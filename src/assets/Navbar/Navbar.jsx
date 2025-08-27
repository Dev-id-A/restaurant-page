import LangIcon from "./LangIcon"

function Navbar({toggleFade}) {
  return (
    <div className="h-25 flex items-center px-10 gap-2">
      <LangIcon src={"/svg/spain.svg"} alt={"Spanish"} onClick={()=> toggleFade("es")} />
      <LangIcon src={"/svg/uk.svg"} alt={"English"} onClick={()=> toggleFade("en")}/>
    </div>
  )
}

export default Navbar