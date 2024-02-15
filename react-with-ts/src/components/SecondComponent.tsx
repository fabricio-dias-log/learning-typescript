import React from 'react'

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Second Component</p>
        <p>Name is {props.name}</p>
    </div>
  )
}

export default SecondComponent