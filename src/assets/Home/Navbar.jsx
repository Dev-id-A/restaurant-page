import Button from "./Button"

function Navbar() {
  return (
    <div className="h-25 flex items-center px-10 gap-2">
      <Button src={"/spain.svg"} />
      <Button src={"/uk.svg"} />
    </div>
  )
}

export default Navbar