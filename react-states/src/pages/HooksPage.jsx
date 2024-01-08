import { PageTitle } from '../components'

const HooksPage = () => {
  return (
    <main>
      <PageTitle />

      <div className='my-10'>
        <HooksPage />
      </div>
    </main>
  )
}

export default HooksPage
