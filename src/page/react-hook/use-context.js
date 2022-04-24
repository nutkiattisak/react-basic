import React, { useState, createContext, useContext } from 'react'

const DataContext = createContext()

const ChildComponent = ({ data }) => {
  const dataFromContext = useContext(DataContext)
  return (
    <>
      <h2 className="text-md mb-2">Child Component</h2>
      <p className="font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
        {dataFromContext}
      </p>
    </>
  )
}

const useContextPage = () => {
  const [data, setData] = useState('data from useContext')
  return (
    <>
      <DataContext.Provider value={data}>
        <div className='className="container mt-4 mx-auto'>
          <h1 className="text-xl mb-2">useContext</h1>

          <h2 className="text-lg mb-2">Parent Component</h2>
          <ChildComponent />
        </div>
      </DataContext.Provider>
    </>
  )
}

export default useContextPage
