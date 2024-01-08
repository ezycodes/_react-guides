import { useState } from "react"

const State = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const [details, setDetails] = useState({counter:0, name: ''})

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);


  const increaseCounter2 = () => {
    // setDetails({ counter: details.counter + 1 })
    
    setDetails((prev) => ({
      ...prev,
      counter: details.counter + 1
    }))
  }

  const decreaseCounter2 = () => {
    // setDetails({ counter: details.counter - 1 })
      
    setDetails((prev) => ({
      ...prev,
      counter: details.counter - 1
    }))
  }

  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-amber-400 text-xl font-bold">
            What is useState?
          </h1>
          <p>
            UseState Hook is a function to <span className='text-amber-400'>add State</span> in Functional Component.
          </p>
        </div>

        <div>
          <h1 className="text-amber-400 text-xl font-bold">
            What is state?
          </h1>
          <p>
            State is nothing but just <span className='text-amber-400'>values or variables</span> of your component.
          </p>
        </div>
      </div>
    
      <div className=" mt-8 flex justify-around items-start flex-row flex-wrap gap-x-32 gap-y-20">
        <div className="space-y-5">
          <h4>NOT OBJECT</h4>
          <input type="text" className="form-input text-black rounded" onChange={(e) => setName(e.target.value)} />

          <h1 className="text-xl font-bold">
            {name} has clicked 
            <span className="text-red-500"> {counter} </span>
            times!!!
          </h1>

          <div className="mt-4 space-x-4">
            <button onClick={increaseCounter}
              className='border border-slate-200 px-6 py-2 rounded bg-slate-500 text-yellow-400 font-medium'>
              Increase (+)
            </button>
            <button onClick={decreaseCounter}
              className='border border-slate-200 px-6 py-2 rounded bg-slate-500 text-yellow-400 font-medium'>
              Decrease (-)
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <h4>WITH OBJECT</h4>
          <input type="text" className="form-input text-black rounded"
            onChange={(e) => setDetails((prev) => ({ ...prev, name: e.target.value }))} />

          <h1 className="text-xl font-bold">
            {details.name} has clicked 
            <span className="text-red-500"> {details.counter} </span>
            times!!!
          </h1>

          <div className="mt-4 space-x-4">
            <button onClick={increaseCounter2}
              className='border border-slate-200 px-6 py-2 rounded bg-slate-500 text-yellow-400 font-medium'>
              Increase (+)
            </button>
            <button onClick={decreaseCounter2}
              className='border border-slate-200 px-6 py-2 rounded bg-slate-500 text-yellow-400 font-medium'>
              Decrease (-)
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default State
