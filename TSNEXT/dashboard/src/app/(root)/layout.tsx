import React from 'react'

export const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3x1'>navbar</h1>
        {children}
    </div>
  )
}
