import React from 'react'

const Total = props => {
  const total = props.parts.reduce(function (sum, part) {
    return sum + part.exercises
  }, 0);

  return <p>total of {total} exercises</p>
};

const Header2 = props =>
<h2>{props.course}</h2>;

const Part = props =>
  <span>{props.part.name} {props.part.exercises}</span>;

const Content = props => {
    return (
      <ul>
        {props.parts.map(part => <p key={part.id}>
            <Part part={part} />
          </p> )}
      </ul>
    )
  };

const Course = props => {
  return (
    <div>
      <Header2 course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
};

export {
    Course
}