import React from 'react'
import GrandParent from './components/GrandParent'
import Data from './context/Data'
const App = () => {
  let username = "Rajesh"
  return (
    <>
      <Data.Provider value={username}>
        <GrandParent/>
      </Data.Provider>
    </>
  )
}

export default App