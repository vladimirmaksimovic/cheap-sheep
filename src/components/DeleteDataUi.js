// import React library
import React from "react"

// create Functional component and destruct props from parent component
function DeleteDataUi({ employees, deleteData }) {
  // list rendering method
  const employeesList = employees.map((employee) => {
    // conditional rendering (optional)
    return employee.age > 10 ? (
      <div key={employee.id} className='employee-list'>
        <div>{employee.id}</div>
        <div>{employee.name}</div>
        <div>{employee.age}</div>
        <div>{employee.favoriteColor}</div>
        <div>
          <button
            onClick={() => {
              deleteData(employee.id)
            }}
          >
            Delete Employee
          </button>
        </div>
      </div>
    ) : null
  })
  // return JSX
  return <div>{employeesList}</div>
}

// export component
export default DeleteDataUi
