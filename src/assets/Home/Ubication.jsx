function Ubication({lat=36.17961, lng=-5.36042}) {
    const src = `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=15&output=embed`;
  return (
    <div className="w-1/3 h-128 overflow-hidden border-5">
        <iframe title="The Grand ubication" src={src} allowFullScreen loading="lazy"
         className="size-full border-0">

</iframe>
    </div>
  )
}

export default Ubication