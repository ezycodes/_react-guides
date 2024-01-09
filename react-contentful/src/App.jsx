import Markdown from 'react-markdown'

import { useEffect, useState } from 'react'
import { contentfulClient } from './lib/contentful'

function App() {
  const [blog, setBlog] = useState([])

  let id = '1eC2shOgIbFppnREXGFdpq'

  // const client = createClient({ space: "a2u5o0i1rbj0", accessToken: "QMostYKvRfC5fYwG37txq0YDY2JqLLOrx6bBQUe7daM" })

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await contentfulClient.getEntry(id).then((entries) => {
          setBlog(entries)
          console.log(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])

  return (
    <>
      <main className='container mx-auto px-2 ease-in duration-150 my-2'>
        <h3 className='text-4xl text-slate-800 font-bold mb-4'>{blog?.fields?.nameOfRecipe}</h3>

        <div className='w-full bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url(${blog?.fields?.featuredImage?.fields?.file?.url})` }}>
          <div className='w-full h-full flex justify-center items-center backdrop-blur-md'>
            <img src={blog?.fields?.featuredImage?.fields?.file?.url}
              alt={blog?.fields?.featuredImage?.fields?.file?.fileName} />
          </div>
        </div>

        <Markdown>
          {blog?.fields?.description}
        </Markdown>


      </main>
    </>
  )
}

export default App
