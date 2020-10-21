// 1. import react library
import React from "react"
import employeesData from "./../../data/employeesData"
import AddDataUi from "./../AddDataUi"
import DeleteDataUi from "./../DeleteDataUi"

/** 2. create component:
 *  -> functional component (stateless, UI, props)
 *  -> class component (stateful, container)
 */

// Class component
class Lesson08 extends React.Component {
  // state object
  state = {
    // pass employees data into state property
    employees: employeesData
  }

  // Add data method
  AddData = (employee) => {
    // set the new id generator
    employee.id = Math.floor(Math.random() * 10)
    // create copy of state array with spread operator
    let employees = [...this.state.employees, employee]
    // then change state with setState method
    this.setState({
      // set new property to copied array
      employees: employees
    })
  }

  // delete data method
  deleteData = (id) => {
    // filter employee by its id thats been clicked in child component
    let employees = this.state.employees.filter((employee) => {
      return employee.id !== id
    })
    // then set State
    this.setState({
      employees: employees
    })
  }

  // render method
  render() {
    // return JSX
    return (
      <div id='lesson-08' className='lesson'>
        <h2>Rendering Data in Multiple Elements</h2>
        <div>
          <div className='employee-list'>
            <div>ID</div>
            <div>NAME</div>
            <div>AGE</div>
            <div>FAVORITE COLOR</div>
          </div>
          <DeleteDataUi
            employees={this.state.employees}
            deleteData={this.deleteData}
          />
        </div>
        <AddDataUi AddData={this.AddData} />
      </div>
    )
  }
}

// 3. export component
export default Lesson08
