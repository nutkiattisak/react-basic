import React from 'react'

const ListReactHook = () => {
  return (
    <>
      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
            <div className="m-3">
              <h2 className="text-lg mb-2">useEffect</h2>
              <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListReactHook
