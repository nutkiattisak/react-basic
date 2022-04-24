import React, { useState, useEffect } from 'react'

const useEffectPage = () => {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('useEffect')
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  console.log(data)

  const renderData = (data) => {
    return data?.map((item) => {
      return (
        <div key={item?.id}>
          <h3>{`#${item?.id} ${item.title}`}</h3>
        </div>
      )
    })
  }

  return (
    <>
      <div className="container mt-4 mx-auto">
        <h2 className="text-lg mb-2">useEffect</h2>
        {data ? (
          <>
            <div className="text-left">{renderData(data)}</div>
          </>
        ) : (
          <>
            <div className="empty"></div>
          </>
        )}
      </div>
    </>
  )
}

export default useEffectPage
