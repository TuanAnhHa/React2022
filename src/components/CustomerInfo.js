import React from 'react'

const CustomerInfo = ({ info }) => {
  // destructuring
  return (
    <div>
      <h3>Customer Info</h3>
      <p>I am the child of Customer Two Component.</p>
      <p>
        My name is {info.name}. My Email: {info.email}. I live in{' '}
        {info.location}. I work for {info.company}
      </p>
    </div>
  )
}

export default CustomerInfo
