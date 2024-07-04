const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.partName} {props.exerciseNumber}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exerciseNumber1 + props.exerciseNumber2 + props.exerciseNumber3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content partName = {part1} exerciseNumber = {exercises1}/>
      <Content partName = {part2} exerciseNumber = {exercises2}/>
      <Content partName = {part3} exerciseNumber = {exercises3}/>
      <Total exerciseNumber1 = {exercises1} exerciseNumber2 = {exercises2} exerciseNumber3 = {exercises3}/>
    </div>
  )
}

export default App