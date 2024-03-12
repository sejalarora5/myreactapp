import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

function ParentComponent() {
  return (
    <div>
        <ChildComponent message='Hello from Parent!'/>
    </div>
  )
}

export default ParentComponent