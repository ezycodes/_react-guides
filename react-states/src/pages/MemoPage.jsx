import { Memo, PageTitle } from '../components'


const MemoPage = () => {
  return (
    <main>
      <PageTitle />

      <div className='my-10'>
        <Memo />
      </div>
    </main>
  )
}

export default MemoPage
