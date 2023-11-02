import { useState } from 'react'
import './App.css'

const Title = (props) => {
  return(
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdotes = (props) => {
  return(
    <div>
      <p>{props.selected}</p>
    </div>
  )
}

const Votes = (props) => {
  return(
    <>
      <p>has {props.votes} votes</p>
    </>
  )
}

const WinnerAnecdote = (props) => {
  return(
    <>
      {props.winner}
    </>
  )
}

function App() {
  const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const handleClick = () => {
    setSelected(randomNum(0,8))
  }

  const vote = () => {
    const allVotes = [...votes]
    allVotes[selected] += 1
    setVotes(allVotes)
  }

  const findWinner = () => {
    const mostVoted = Math.max(...votes)
    const winner = votes.indexOf(mostVoted)
    return winner
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdotes selected={anecdotes[selected]} />
      <Votes votes={votes[selected]}/>
      <Button handleClick={vote} text="Vote" />
      <Button handleClick={handleClick} text ="Next anecdote" />
      <Title text ="Anecdote with most votes" />
      <WinnerAnecdote winner={anecdotes[findWinner()]}/>
    </div>
  )
}

export default App
