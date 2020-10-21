import React, { Component } from "react"

class AddDataUi extends Component {
  // set state properties to null
  state = {
    name: null,
    age: null,
    favoriteColor: null
  }

  // On change method
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // Add Data method
  handleSubmit = (e) => {
    // prevent default behaviour of submit event
    e.preventDefault()
    // call method from parent component and pass state from form as paramter
    this.props.AddData(this.state)
  }

  render() {
    return (
      <div className='add-data'>
        {/* create form component */}
        <form onSubmit={this.handleSubmit} className='employee-form'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={this.handleChange} />
          <br />
          <label htmlFor='age'>Age:</label>
          <input type='text' id='age' onChange={this.handleChange} />
          <br />
          <label htmlFor='favoriteColor'>Favorite Color:</label>
          <input type='text' id='favoriteColor' onChange={this.handleChange} />
          <br />
          <button>Add New Employee</button>
        </form>
      </div>
    )
  }
}

export default AddDataUi
