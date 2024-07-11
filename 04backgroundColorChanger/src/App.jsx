import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='w-full fixed bottom-3 inset-x-0 flex justify-center p-3'>
          <div className='flex justify-center flex-wrap bg-white py-2 px-2 rounded-3xl gap-3'>
            <button className='px-3 py-2 bg-red-600 text-white rounded-full' onClick={() => setColor("red")}>Red</button>
            <button className='px-3 py-2 bg-blue-600 text-white rounded-full' onClick={() => setColor("blue")}>Blue</button>
            <button className='px-3 py-2 bg-orange-600 text-white rounded-full' onClick={() => setColor("orange")}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
