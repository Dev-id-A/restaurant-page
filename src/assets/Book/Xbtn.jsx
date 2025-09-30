function Xbtn({setDisplay}) {
  return (
      <button className="text-royal text-2xl xl:text-5xl hover:cursor-pointer hover:scale-120 animation-all duration-300 ml-auto" 
      onClick={()=>setDisplay(prev=>!prev)}>X</button>
  )
}

export default Xbtn