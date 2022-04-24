import React, { useState } from 'react'

const useStatePage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="container mt-4 mx-auto">
        <h2 className="text-xl mb-2">useState</h2>

        <button
          type="button"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Count = {count}
        </button>
      </div>
    </>
  )
}

export default useStatePage
