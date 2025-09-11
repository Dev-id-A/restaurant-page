function MenuBtn({children, image, menu}) {
  return (
    <button className="relative border size-full hover:cursor-pointer group border-white" onClick={()=> window.open(`${menu}`, "_blank")}>
      
      <img src={`${image}`} className="absolute inset-0 w-full h-full group-hover:scale-102 transition-all duration-1000" />
      
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 group-hover:scale-102 transition-all duration-1000"></div>

      <h2 className="text-5xl text-white absolute inset-0 top-5 flex justify-center z-10 group-hover:scale-102 transition-all duration-1000">{children}</h2>

      
    </button>
  )
}

export default MenuBtn