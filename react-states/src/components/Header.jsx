import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-slate-700 w-full">
      <div className="max-w-screen-2xl flex justify-start items-center flex-wrap gap-4 py-6 px-2 lg:px-6 font-medium">
        <NavLink to='/' className='hover:underline'> Home </NavLink>
        <NavLink to='/state' className='hover:underline'> State </NavLink>
        <NavLink to='/effect' className='hover:underline'> Effect </NavLink>
        <NavLink to='/context' className='hover:underline'> Context </NavLink>
        <NavLink to='/ref' className='hover:underline'> Ref </NavLink>
        <NavLink to='/reducer' className='hover:underline'> Reducer </NavLink>
        <NavLink to='/layouteffect' className='hover:underline'> LayoutEffect </NavLink>
        <NavLink to='/memo' className='hover:underline'> Memo </NavLink>
        <NavLink to='/callback' className='hover:underline'> Callback </NavLink>
        <NavLink to='/hooks' className='hover:underline'> Hooks </NavLink>
      </div>
    </div>
  )
}

export default Header
