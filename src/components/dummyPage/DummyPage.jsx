import React, { useRef } from 'react'

export default function DummyPage() {
  const count = useRef(0);
  const plus = ()=>{
    count.current+=1
    console.log(count.current)
  }
  const minus = ()=>{
    count.current-=1
  }
  return (
    <div>
      <button onClick={plus}>+</button>
      <span>{count.current}</span>
      <button onClick={minus}>-</button>
    </div>
  )
}
