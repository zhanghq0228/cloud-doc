import React from 'react'
import SimpleMDE from 'react-simplemde-editor'

interface markProps {
  flileValue: any
}

const SimpleMde: React.FC<markProps> = props => {
  const handleChange = (value: string): any => {
    return console.log(value)
  }
  return (
    <SimpleMDE
      id="your-custom-id"
      value={props.flileValue}
      onChange={handleChange}
      options={{ maxHeight: '480px' }}
    />
  )
}
export default SimpleMde
