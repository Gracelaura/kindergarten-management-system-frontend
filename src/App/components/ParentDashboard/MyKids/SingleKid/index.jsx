import React, { useContext } from 'react'
import ParentContext from '../../../ParentContext'
function SingleKid() {
  const {} = useContext(ParentContext)
  return (
    <div>SingleKid</div>
  )
}

export default SingleKid