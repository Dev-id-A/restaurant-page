import { Outlet } from "react-router";

function Layout({fadeLang}) {
  return (
    <div className={`transition-opacity duration-500 ${fadeLang == true ? "opacity-0":"opacity-100"}`}>
        <Outlet />
    </div>
  )
}

export default Layout