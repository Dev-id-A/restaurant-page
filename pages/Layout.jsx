import { Outlet } from "react-router";
import LoadingPage from "../pages/LoadingPage";
import { useState, useEffect } from "react";


function Layout({fadeLang}) {
    const [loading, setLoading] = useState(false);
    
  
    useEffect(()=>{

      if(!sessionStorage.getItem("visited")){
        setLoading(true)
        const loadingTimer = setTimeout(()=>{
        sessionStorage.setItem("visited","true");
        setLoading(false);
        },2000)

      return ()=> clearTimeout(loadingTimer)
      }
    },[])

  return (
    <div className={`transition-opacity duration-500 ${fadeLang == true ? "opacity-0":"opacity-100"}`}>
       {loading ?( <LoadingPage/>):
        <Outlet />} 
    </div>
  )
}

export default Layout