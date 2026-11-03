import React from 'react'
import Data from '../context/Data'
import { useContext } from 'react'
const Child = () => {
  let a = useContext(Data)
  return (
    <>
      <h1>This is Child..{a}</h1>
    </>
  )
}

export default Child