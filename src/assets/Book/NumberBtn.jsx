function NumberBtn({children, size, guest, setGuest}) {

    const addRestGuest = (param) => {
     setGuest((prev)=> {
      if (param == "-" && prev>1){
        return prev - 1; 
      }else if(param == "+" && prev<20){
        return prev + 1;
      }
      return prev;
     })
    };
  return (
    <button className={`bg-black flex justify-center items-center border-3 border-royal hover:cursor-pointer ${size}`} onClick={()=>addRestGuest(`${children}`)}>{children}</button>
  )
}

export default NumberBtn