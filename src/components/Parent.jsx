import React from 'react'
import Child from './Child'
import Data from '../context/Data'
import { useContext } from 'react'
const Parent = () => {
  let b = useContext(Data)
  return (
    <>
      <h1>This is Parent...{b}</h1>
      <Child/>
    </>
  )
}

export default Parent