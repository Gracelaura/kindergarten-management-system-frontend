import React from 'react'
import "./Classes.css"

const classesData = [
  {
    id: 1,
    name: 'PP1',
    teacherName: 'Ms. Smith',
    ageRange: '3-4 years old',
    numStudents: 20,
  },
  {
    id: 2,
    name: 'PP2',
    teacherName: 'Mr. Johnson',
    ageRange: '4-5 years old',
    numStudents: 22,
  },
  {
    id: 3,
    name: 'PP3',
    teacherName: 'Mrs. Williams',
    ageRange: '5-6 years old',
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
        <p>Age range: {klass.ageRange}</p>
        <p>Number of students: {klass.numStudents}</p>
      </div>
    ))}
  </div>
  )
}

export default Classes