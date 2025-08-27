function LangIcon({src, alt, onClick}) {
  return (
    <button className="size-10 cursor-pointer">
      <img src={src} alt={alt} onClick={onClick} />
    </button>
  )
}

export default LangIcon