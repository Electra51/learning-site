import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const error = useRouteError()
  return (
    
      
      <div className='flex flex-col min-h-[500px] justify-center items-center  dark:bg-gray-900'>
      <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
      <br />
        {error && (
          <div>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    
  )
}

export default ErrorPage