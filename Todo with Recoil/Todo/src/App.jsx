import { useState } from 'react'
import { DescriptionAtom, TitleAtom, TodosAtom } from './store/atoms/todo'
import { FilterTodo } from './store/atoms/todo'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState,RecoilRoot } from 'recoil'

function App() {

  return (
    <div>
      <RecoilRoot> <Todo></Todo></RecoilRoot>
       
    </div>
  )
}

function Todo(){
  return(<div>
    <Title></Title>
    <br />
    <Description></Description>
    <br />
    <Button></Button>
    
   
  </div>
    
  )
}

function Title(){
 const setTitle = useSetRecoilState(TitleAtom);
 return(
  <div>
    Title 
    <input type="text" 
    onChange={(e) => {
      setTitle(e.target.value);
    }}></input>
</div>
 )
}

function Description(){
  const SetDescription =useSetRecoilState(DescriptionAtom)
  return(
    <> Description  
     <input onChange={(e) => {
      SetDescription(e.target.value);
     }} >
     </input>
</>

  )
}
function Button(){
  return(<>
  <button onClick={() => {
       TodosAtom =>[TitleAtom,DescriptionAtom]
  }}>
    myTodo
  </button>
  </>)
}
export default App
