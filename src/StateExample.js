import React from 'react'

export default class StateExample extends React.Component {
    state={
        name:"react",
        age:2255
    }
  render() {
    return (
      <div>
        StateExample
        <p>{this.state.name}</p>
      </div>
    )
  }
}

