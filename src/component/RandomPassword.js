import { useState, useEffect, useRef} from "react";
import "./ran.css"


const RandomPassword = ({color})=>{
const [length ,setLength]= useState(5);
const [length2 ,setLength2]= useState(5);
const [numberAllowed, setNumberAllowed]=useState(false)
const [charAllowed, setCharAllowed]=useState(false)
const [password, setPassword]= useState();
const passwordRef= useRef(null)
// const [colChange, setColChange]= useState("black")
let pass=''
let  passwordGenerator= ()=>{

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwixyz";
    let no="0123456789"
    let symbole="~!@#$%^&*()+"
    if(charAllowed)
      {
       pass += symbole.charAt(Math.floor(Math.random() * symbole.length))
    }
    if(numberAllowed)
     {
      pass+= no.charAt(Math.floor(Math.random() * no.length))
    }
    let index= Math.floor(Math.random() * str.length);
    pass += str.charAt(index)

if( pass.length< length)
{
   passwordGenerator()
}else{
  if (pass.length > length) {
    let subStr = pass.substring(0, length);
    setPassword(subStr)
    }
  setPassword(pass)
}
console.log(" password", pass)

setPassword(pass)

}

 let coppyPasswordOnClipboard=(len)=>{
  
  passwordRef.current?.select()
 passwordRef.current?.setSelectionRange(0,parseInt(len))
  window.navigator.clipboard.writeText(password.substr(0,parseInt(len)))
 }
let selectPasswordChar =(len)=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,parseInt(len))
}


useEffect(()=>{ passwordGenerator()}, [length, numberAllowed, charAllowed, setPassword])

return(
    <>
    {/* passwordField */}
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  transparent-div">
    <h1 className="my-3 text-center " style={{color: color}}>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password}
         className="outline-none w-full py-1 px-3"
          placeholder="Password" ref={passwordRef} readOnly/>
<button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={()=>coppyPasswordOnClipboard(length2)}> Copy</button>
        </div>
     
       <div className="max-w-md mx-auto text-center">
       <label style={{color: color}} >How many characters you want to copy? </label>
       <input type="range" min={1} max={length} value={length2}
        className="cursor-pointer"
        onChange={(e)=>{
          setLength2(e.target.value);
          selectPasswordChar(e.target.value)}}
         
          /> <span style={{color: color}}>{length2}</span> 
       
        
       </div>
{/* lover textbox */}
<div className=" text-sm gap-x-2 flex " style={{color: color}}>
    <div className="flax item-center gap-x-1">
        <input type="range" min={5} max={20} value={length}
        className="cursor-pointer"
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label >Length:  {length} </label>
    </div>
    <div className="flex item-center gap-x-1">
    <input 
    type="checkbox" 
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>setNumberAllowed((prev)=>!prev)}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex item-center gap-x-1">
    <input 
    type="checkbox" 
    defaultChecked={charAllowed}
    id="charInput"
    onChange={()=>  setCharAllowed((prev)=>!prev)}
    />
    <label htmlFor="charInput">Characters</label>

    </div>
  </div>
</div>

    </>
)

}

export default RandomPassword







