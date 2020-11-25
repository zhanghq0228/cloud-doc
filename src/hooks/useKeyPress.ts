
import React,{useState,useEffect} from 'react'

interface KEYCODE{
}
const useKeyPress = (targetKeyCode:Number)=>{
const [keyPressed, setkeyPressed] = useState<Boolean>(false)

const keyDownHandler = (keyCode:KEYCODE)=>{
  if(keyCode === targetKeyCode){
    setkeyPressed(true)

  }
}

const keyUpHandler = (keyCode:KEYCODE)=>{
  if(keyCode === targetKeyCode){
    setkeyPressed(false)
    
  }
}

useEffect(() => {
  document.addEventListener('keydown',keyDownHandler)
  document.addEventListener('keyup',keyUpHandler)
  return ()=>{
    document.removeEventListener('keydown',keyDownHandler)
  document.removeEventListener('keyup',keyUpHandler)
  }
},[])

return keyPressed
}
export default useKeyPress