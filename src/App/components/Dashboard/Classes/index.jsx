import React from 'react'
import "./Classes.css"

const classesData = [
  {
    id: 1,
    name: 'PP1',
    teacherName: 'Ms. Smith',
    numStudents: 20,
  },
  {
    id: 2,
    name: 'PP2',
    teacherName: 'Mr. Johnson',
    numStudents: 22,
  },
  {
    id: 3,
    name: 'PP3',
    teacherName: 'Mrs. Williams',
    numStudents: 19,
  },
];

function Classes() {
  return (
    <div className="classes-page">
    <h1>Classes</h1>
    {classesData.map(klass => (
      <div className="class-card" key={klass.id}>
        <h2>{klass.name}</h2>
        <p>Teacher: {klass.teacherName}</p>
        <p>Number of students: {klass.numStudents}</p>
      </div>
    ))}
  </div>
  )
}

export default Classes