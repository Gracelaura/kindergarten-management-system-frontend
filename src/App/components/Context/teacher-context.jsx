import React, { createContext } from 'react'
export const TeacherContext = createContext()
export const TeacherContextProvider = (props) => {
  return (
    <TeacherContext.Provider>{props.children}</TeacherContext.Provider>
  )
}
