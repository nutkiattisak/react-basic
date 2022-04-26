import React, { useState, useEffect, useRef } from 'react'

const useStatePage = () => {
  const [inputValue, setInputValue] = useState('')
  const count = useRef(0)

  const inputElement = useRef()

  const focusInput = () => {
    inputElement.current.focus()
  }

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <>
      <div className="container mt-4 mx-auto">
        <h2 className="text-xl mb-2">useRef</h2>

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        <input type="text" className="form-control" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  )
}

export default useStatePage
