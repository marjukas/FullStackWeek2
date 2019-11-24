import React from 'react'
import ReactDOM from 'react-dom'

const Courses = props => {
  return (
    <div>
      {props.courses.map( (course) => {
        return <Course key={course.id} course={course} />
      })}
    </div>
  )
}

const Course = props => {
  return (
    <div>
      <Header2 course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Header1 = ({curriculumName}) =>
  <h1>{curriculumName}</h1>
  
  const Header2 = props =>
  <h2>{props.course}</h2>

const Total = props => {
  const total = props.parts.reduce(function (sum, part) {
    return sum + part.exercises
  }, 0)

  return <p>total of {total} exercises</p>
}
  

const Part = props =>
  <span>{props.part.name} {props.part.exercises}</span>

const Content = props => {
    return (
      <ul>
        {props.parts.map(part => <p key={part.id}>
            <Part part={part} />
          </p> )}
      </ul>
    )
  }

const App = () => {
  const curriculumName = "Web development curriculum"
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10, 
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14, 
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11, 
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      <Header1 curriculumName={curriculumName} />
      <Courses courses={courses} />
      {/* <Course course={courses[1]} /> */}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)