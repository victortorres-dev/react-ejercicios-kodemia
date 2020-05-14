import React, { Component } from 'react'

function Clock() {
  return (
    <div>
      <p>Ejemplo del reoj, la hora es: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock