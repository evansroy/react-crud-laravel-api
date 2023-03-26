import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Student() {

    useEffect(() => {
        
    })
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
            <div className='card'>
                <div className='card-header'>
                    <h4>Student List
                        <Link to="/" className='btn btn-primary float-end'>Add Student</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Student;