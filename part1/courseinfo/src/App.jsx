const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.exerciseNumber}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partNames[0]} exerciseNumber={props.exerciseNumbers[0]}/>
      <Part partName={props.partNames[1]} exerciseNumber={props.exerciseNumbers[1]}/>
      <Part partName={props.partNames[2]} exerciseNumber={props.exerciseNumbers[2]}/>
    </div>
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
      <Content partNames = {[part1, part2, part3]} exerciseNumbers = {[exercises1, exercises2, exercises3]}/>
      <Total exerciseNumber1 = {exercises1} exerciseNumber2 = {exercises2} exerciseNumber3 = {exercises3}/>
    </div>
  )
}

export default App