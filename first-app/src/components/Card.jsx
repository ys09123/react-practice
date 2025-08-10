import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
      <div className="card" style={{overflow: "hidden"}}>
        <img src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhaW50aW5nfGVufDB8fDB8fHww" alt="" width={233} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
  )
}

export default Card
