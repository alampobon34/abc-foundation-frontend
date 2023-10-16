import React from 'react'

interface TitleProps {
    name: string,
    styles?: string,
}
const Title = ({name, styles}: TitleProps) => {
  return (
    <h1 className='text-title-color text-xl md:text-4xl font-bold'>{name}</h1>
  )
}

export default Title