import React from 'react'
import ReactDOM from 'react-dom'
import {Course} from './components/Course.js'

const Courses = props => {
  return (
    <div>
      {props.courses.map( (course) => {
        return <Course key={course.id} course={course} />
      })}
    </div>
  )
};

const Header1 = ({curriculumName}) =>
  <h1>{curriculumName}</h1>;
  
const App = () => {
  const curriculumName = "Web development curriculum";
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
  },

];

  return (
    <div>
      <Header1 curriculumName={curriculumName} />
      <Courses courses={courses} />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)