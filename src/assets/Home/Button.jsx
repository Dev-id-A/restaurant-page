import { Link } from 'react-router'

function Button({to, children, styleBtn}) {
  return (
    <button className={`${styleBtn} border-[rgb(212,175,55)] border-2 h-20 w-40 rounded-3xl text-[rgb(212,175,55)] text-2xl`}>
      <Link to={to}>{children}</Link>
    </button>
  )
}

export default Button