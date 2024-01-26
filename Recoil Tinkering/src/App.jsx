import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom,EvenSelector } from './store/atoms/count'


function App() {

  return (
     <div>
      <RecoilRoot>
        <Count/>
        
      </RecoilRoot>
   
     </div>
  )
}



function Count(){    
  return <div>
    <CountRenderer/> 
  
    <Button/>
  </div>
}


 function CountRenderer(){
  const count = useRecoilValue(countAtom);

 
  return(
    <div>
      {count}      
      <EvenRerender></EvenRerender> 
    </div>
  )
 }


function Button(){ 
  const setCount = useSetRecoilState(countAtom);
console.log("Hey i am not re rendring again and again ");

  return(
    <div>
    
     <br />
    <button onClick={() => {
      setCount(count => count+1);
    }}>INCREMENT</button>
    <button onClick={() => {
      setCount(count => count-1);
    }}>DECREMENT</button>
    </div>
  )
}

function EvenRerender() {
  const value = useRecoilValue(EvenSelector);
return(
  <div>
    {value == 0  ? "Even" : null}
   
  </div>
)
}



export default App
