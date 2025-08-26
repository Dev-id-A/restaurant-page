import Button from "./Button"

function Navbar({toggleFade}) {
  return (
    <div className="h-25 flex items-center px-10 gap-2">
      <Button src={"/svg/spain.svg"} alt={"Spanish"} onClick={()=> toggleFade("es")} />
      <Button src={"/svg/uk.svg"} alt={"English"} onClick={()=> toggleFade("en")}/>
    </div>
  )
}

export default Navbar