
import './App.css'
import { useState } from 'react'

const Statistics = (props) => {
  const good = props.values[0]
  const neutral = props.values[1]
  const bad = props.values[2]
  const total = props.values[3]
  const sum = props.values[4]
  const average = sum / total
  const positive = good / total * 100
  const title = <h2>Statistics</h2>

  if (total === 0) {
    return(
      <div>
        {title}
        No feedback given yet.
      </div>
    )
  }
  return(
    <div>
      {title}
      <StatisticLine text="Good" value={good} id='0' />
      <StatisticLine text="Neutral" value={neutral} id='1' />
      <StatisticLine text="Bad" value={bad} id='2'/>
      <StatisticLine text="Total" value={total} id='3'/>
      <StatisticLine text="Average" value={average} id='4'/>
      <StatisticLine text="Positive" value={positive + ' %'} id='5'/>
    </div>
  )
}

const StatisticLine = (props) => {
    return(
      <>
        <table>
          <tbody>
            <tr>
              <td>{props.text}</td>
              <td>{props.value}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
}

const MyButton = (props) => {
  return(
    <>
      <button onClick={props.handleClick}>
      {props.text}
      </button>
    </>
  )
}

const PageTitle = (props) => {
  return(
    <>
      <h1>{props.title}</h1>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)

  const title = 'Give feedback'

  const handleGood = () => {
    const updateGood = good + 1
    const updateSum = sum + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
    setSum(updateSum)
  }

  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    const updateSum = sum + 0
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
    setSum(updateSum)
  }

  const handleBad = () => {
    const updateBad = bad + 1
    const updateSum = sum - 1
    setBad(updateBad)
    setTotal(good + neutral + updateBad)
    setSum(updateSum)
  }

  return (
    <div>
        <PageTitle title={title} />
        <MyButton handleClick={handleGood} text='Good' />
        <MyButton handleClick={handleNeutral} text='Neutral' />
        <MyButton handleClick={handleBad} text='Bad' />
        <Statistics values={[good, neutral, bad, total, sum]}/>
      
    </div>
  )
}

export default App
