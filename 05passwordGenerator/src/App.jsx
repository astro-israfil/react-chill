import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumberAllowed) {
      str += "0123456789"
    }
    if (isCharAllowed) {
      str += "!@#$%^&*"
    }
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, isCharAllowed, isNumberAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
          <div className='w-[80%] max-w-xl p-4 bg-gray-950 rounded-md'>
            <h1 className='text-center text-3xl font-bold text-gray-400'>Generate your Password</h1>
            <div className='flex mt-4'>
              <input type="text" value={password} className='flex-1 bg-gray-800 text-white outline-none border-0 p-3 rounded-s-md' ref={passwordRef} readOnly />
              <button className='py-2 px-3 bg-blue-600 text-white rounded-e-md' onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <div className='flex justify-between items-center mt-4 flex-wrap'>
              <div className='flex items-center'>
                  <input className='cursor-pointer' type="range" min={8} max={33} value={length} name="passwordLength" id="passwordLength" onChange={(e) => setLength(e.target.value)} />
                  <label htmlFor="passwordLength" className='text-white ml-2'>Length: {length}</label>
              </div>
              <div className='flex items-center'>
                <input type="checkbox" defaultChecked={isCharAllowed} name="isCharAllowed" id="isCharAllowed" className='w-4 h-4 cursor-pointer' onChange={() => setIsCharAllowed(prev => !prev)} />
                <label htmlFor="isCharAllowed" className='text-white ml-2'>Include Charecter</label>
              </div>
              <div className='flex items-center'>
                <input type="checkbox" defaultChecked={isNumberAllowed} name="isNumberAllowed" id="isNumberAllowed" className='w-4 h-4 cursor-pointer' onChange={() => setIsNumberAllowed(prev => !prev)} />
                <label htmlFor="isNumberAllowed" className='text-white ml-2'>Include Numbers</label>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
