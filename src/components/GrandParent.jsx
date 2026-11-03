import React from 'react'
import Parent from './Parent'
const GrandParent = () => {
  return (
    <>
      <h1>This is Grand Parent..</h1>
      <Parent/>
    </>
  )
}

export default GrandParent