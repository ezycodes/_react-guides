import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();
  const path = location.pathname;

  let page = 'HOME';

  if (path !== '/') {
    page = path.slice(1).toUpperCase();
  }

  return (
    <h4 className='text-center lg:text-left text-yellow-400 text-2xl font-bold'>USE{page} PAGE</h4>
  )
}

export default PageTitle
