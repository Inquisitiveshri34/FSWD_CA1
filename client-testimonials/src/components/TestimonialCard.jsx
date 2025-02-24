import React from 'react'

const TestimonialCard = ({props}) => {
  return (
    <div>
        <h4>{props.name}</h4>
        <h6>{props.review}</h6>
    </div>
  )
}

export default TestimonialCard