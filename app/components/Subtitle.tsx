import React from 'react'

interface SubtitleProps {
    name: string,
    styles?: string,
}
const Subtitle = ({name, styles}: SubtitleProps) => {
  return (
    <h1 className='text-sm md:text-lg'>{name}</h1>
  )
}

export default Subtitle