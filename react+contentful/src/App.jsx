import './App.css'

import { useEffect, useState } from 'react'
// import { createClient } from "contentful"
import { client } from './client'

function App() {
  const [ez, setEz] = useState([])

  let id = '1eC2shOgIbFppnREXGFdpq'

  // const client = createClient({ space: "a2u5o0i1rbj0", accessToken: "QMostYKvRfC5fYwG37txq0YDY2JqLLOrx6bBQUe7daM" })

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setEz(entries)
          console.log(entries)
          // console.log(ez)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])

  // console.log(JSON.stringify(import.meta.env.VITE_CONTENTFUL_SPACE_ID))

  // client
  // .getEntry(id)
  //   .then((entry) => setSingleBlogPost(entry))
  //   .catch((err) => console.log(err))
  
  
  
  return (
    <>
      <div className='container'>
        {ez?.fields?.description}
      </div>
    </>
  )
}

export default App
