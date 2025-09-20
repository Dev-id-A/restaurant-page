function NumberBtn({children, size}) {
  return (
    <button className={`flex justify-center items-center border-3 border-royal ${size}`}><p>{children}</p></button>
  )
}

export default NumberBtn