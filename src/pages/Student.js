import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function Student() {

    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/students`).then(res => {
            console.log(res)
            setStudents(res.data.students);
            setLoading(false);
        });
    }, [])

    if(loading){ 
        return(
           <Loading/>
        )
    }

    var studentDetails = "";
    studentDetails = students.map( (item,index) => {
        return(

            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to="/" className='btn btn-success'>Edit</Link>
                </td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    });
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
            <div className='card'>
                <div className='card-header'>
                    <h4>Student List
                        <Link to="/students/create" className='btn btn-primary float-end'>
                            Add Student
                        </Link>
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
                            {studentDetails}
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