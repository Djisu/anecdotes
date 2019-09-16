import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  let arrAnectodes = []
  for (let i=0; i < anecdotes.length; i++){
      arrAnectodes[i]=0
  }
let votesKount = 0

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(0)

  const handleClick = () => {  
    const newSelected = Math.floor(Math.random() * anecdotes.length)  
    setSelected(newSelected)  
  }

  const handleVoteClick =(props) => {  
    
    let arrIndex =anecdotes.indexOf(anecdotes[selected])
  
    votesKount = arrAnectodes[arrIndex]
    
    votesKount += 1
    arrAnectodes[arrIndex]=votesKount
    
    setVoted(votesKount)
  }

  return (
    <div>     
      {props.anecdotes[selected]}<br />
      has {voted} votes <br />
      <button onClick={handleVoteClick}>vote</button><br />
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
