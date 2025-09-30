function Xbtn({setDisplay}) {
  return (
      <button className="size-12 text-royal text-5xl hover:cursor-pointer hover:scale-120 animation-all duration-300 ml-auto" onClick={()=>setDisplay(prev=>!prev)}>X</button>
  )
}

export default Xbtn