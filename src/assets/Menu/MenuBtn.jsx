function MenuBtn({children, image, menu}) {
  return (
    <button className="relative border hover:cursor-pointer group border-royal w-60 h-80
    md:w-full md:h-80 lg:h-100 xl:h-140" onClick={()=> window.open(`${menu}`, "_blank")}>
      
      <img src={`${image}`} className="absolute inset-0 size-full group-hover:scale-102 transition-all duration-1000" />
      
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 group-hover:scale-102 transition-all duration-1000"></div>

      <h2 className="text-2xl text-royal absolute inset-0 top-5 flex justify-center z-10 group-hover:scale-102 transition-all duration-1000
      lg:text-4xl
      xl:text-5xl">{children}</h2>

      
    </button>
  )
}

export default MenuBtn