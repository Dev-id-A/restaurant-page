function NumberBtn({parameter, children, size, guest, setGuest, time, setTime}) {

    const addRestParameters = (children, parameter) => {
      //Guest section
      if (parameter == guest){
     setGuest((prev)=> {
      if (children == "-" && prev > 1){
        return prev - 1; 
      }else if(children == "+" && prev < 20){
        return prev + 1;
      }
      return prev;
     })
    }
    //Time section
    else if(parameter == time){
      setTime((prev)=>{
        if(children == "-" && prev > 14){
          return prev - 1;
        } else if(children == "+" && prev < 22){
          return prev + 1;
        }
        return prev;
      })
    }
  };
  return (
    <button className={`bg-black flex justify-center items-center border-1 border-royal hover:cursor-pointer hover:text-[rgba(80,80,80,1)] ${size}`} 
    onClick={()=>addRestParameters(children, parameter)}>{children}</button>
  )
}

export default NumberBtn