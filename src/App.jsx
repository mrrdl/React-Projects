import { useState } from "react"

function App() {
  const [Colour, setColour] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:Colour}}
      >
        <div className="fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2">

          <div className="fixed flex-wrap justify-center gap-3 
          shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"red"}}>
            Red</button>

            <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"green"}}>
            Green</button>

            <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"blue"}}>
            Blue</button>

            <button
            onClick={() => setColour("violet")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"violet"}}>
            Violet</button>

            <button
            onClick={() => setColour("yellow")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"yellow"}}>
            Yellow</button>

            <button
            onClick={() => setColour("pink")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"pink"}}>
            Pink</button>

            <button
            onClick={() => setColour("black")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg"
            style={{backgroundColor:"black"}}>
            Black</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
