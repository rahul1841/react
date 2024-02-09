import { useCallback, useEffect, useState, useRef } from 'react'



function App() {

  const [length, setLenght] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPaaword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (numbersAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPaaword(pass)

  }, [length, numbersAllowed, charAllowed, setPaaword])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  const handleGenerateClick = useCallback(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md text-center rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='font-medium text-center my-3 text-2xl'>Password Generator</h1>
        <div className='flex  rounded-lg overflow-hidden '>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 mb-7 rounded-bl-lg rounded-bottom-lg text-cyan-500'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className='outline-none bg-blue-500 hover:bg-blue-700 text-white font-medium
             px-3 py-0.5 mb-7 rounded-br-lg rounded-bottom-lg '> Copy</button>
        </div>
        <div className='flex items-center gap-x-10 '>
          <div className='flex items-center gap-x-1 mb-4'>
            <input type="range"
              min={6}
              max={100}
              id='lengthrange'
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLenght(e.target.value) }}
            />
            <label htmlFor="lengthrange">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input type="checkbox"
              defaultChecked={numbersAllowed}
              id='numberInput'
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        <div >
          <button
            onClick={handleGenerateClick}
            className='bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold
           hover:text-white border border-cyan-500 hover:border-cyan-500 rounded px-3 rounded-lg py-0.5 mb-6'>
            Click to Generate
          </button>

        </div>
      </div>
    </>
  )
}

export default App
