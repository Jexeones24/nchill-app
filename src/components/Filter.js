import React, { Component } from 'react'

export default class Filter extends Component {
  state = {
    input: ''
  }
  handleInputChange = (e) => {
    this.setState({ input: e.target.value }, () => {
      this.props.filterList(this.state.input)
    })
  }

  render () {
    return (
      <input
        type='text'
        name='input'
        value={this.state.input}
        className='movie-group-search'
        placeholder='filter...'
        onChange={this.handleInputChange}
      />
    )
  }
}
