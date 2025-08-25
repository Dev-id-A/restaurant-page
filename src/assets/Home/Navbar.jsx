import Button from "./Button"

function Navbar({setLang}) {
  return (
    <div className="h-25 flex items-center px-10 gap-2">
      <Button src={"/spain.svg"} alt={"Spanish"} onClick={()=> {console.log(lang)}} />
      <Button src={"/uk.svg"} alt={"English"} onClick={()=> setLang("en")}/>
    </div>
  )
}

export default Navbar