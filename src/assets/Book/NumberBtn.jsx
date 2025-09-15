function NumberBtn({children, size}) {
  return (
    <button className={`flex justify-center items-center border-3 ${size}`}><p>{children}</p></button>
  )
}

export default NumberBtn