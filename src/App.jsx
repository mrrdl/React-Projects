import { useState,useCallback,useEffect,useRef} from "react"

function App() {

    const[length,setlength]=useState(8)
    const[numbers,setnumber]=useState(false);
    const[character,setcharacter]=useState(false)
    const[Password,setpass]=useState("")
    
    const passwordRef=useRef(null)

    const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers){
      str += "0123456789"
    }
    if (character){
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpass(pass)

    }, [length, numbers, character, setpass])

    const copypasswordtoclip=useCallback(() => {
      passwordRef.current?.select()
      //passwordRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(Password)
    },[Password])

    useEffect(() => {passwordGenerator()},[length,numbers,character,passwordGenerator])

    return(
      <>
      <div className="w-full max-w-mid mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 text-orange-700 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}/>
          <button
          onClick={copypasswordtoclip}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-900">
            Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={() => {
              setnumber((prev)=!prev)
            }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={character}
            id="charInput"
            onChange={() => {
              setcharacter((prev)=!prev)
            }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
      </>
    )
}
export default App
