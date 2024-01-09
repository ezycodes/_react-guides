import { useLocation, NavLink } from "react-router-dom"

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-slate-700 w-full">
      <div className="max-w-screen-2xl flex justify-start items-center flex-wrap gap-4 py-6 px-2 lg:px-6 font-medium">
        <NavLink to='/'
          className={`${path === '/' ? 'underline ' : ''} ' hover:underline`}> Home </NavLink>
        <NavLink to='/state'
          className={`${path === '/state' ? 'underline ' : ''} ' hover:underline`}> State </NavLink>
        <NavLink to='/effect'
          className={`${path === '/effect' ? 'underline ' : ''} ' hover:underline`}> Effect </NavLink>
        <NavLink to='/context'
          className={`${path === '/context' ? 'underline ' : ''} ' hover:underline`}> Context </NavLink>
        <NavLink to='/ref'
          className={`${path === '/ref' ? 'underline ' : ''} ' hover:underline`}> Ref </NavLink>
        <NavLink to='/reducer'
          className={`${path === '/reducer' ? 'underline ' : ''} ' hover:underline`}> Reducer </NavLink>
        <NavLink to='/layouteffect'
          className={`${path === '/layouteffect' ? 'underline ' : ''} ' hover:underline`}> Layout Effect </NavLink>
        <NavLink to='/memo'
          className={`${path === '/memo' ? 'underline ' : ''} ' hover:underline`}> Memo </NavLink>
        <NavLink to='/callback'
          className={`${path === '/callback' ? 'underline ' : ''} ' hover:underline`}> Callback </NavLink>
        <NavLink to='/hooks'
          className={`${path === '/hooks' ? 'underline ' : ''} ' hover:underline`}> Hooks </NavLink>
      </div>
    </div>
  )
}

export default Header
