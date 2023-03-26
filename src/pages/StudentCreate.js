import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function StudentCreate() {

    const [student, setStudent] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:''
    })

    const handleInput = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
    }

    const saveStudent = (e) => {
        e.preventDefault();

        const data = {
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            phone: student.phone,
        }

        axios.post(`http://127.0.0.1:8000/api/students`, data).then(res => {
            
            alert(res.data.message);
        });
    }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Add Student
                  <Link
                    to="/students"
                    className="btn btn-danger float-end"
                  >
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={saveStudent}>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input type="text" name="firstname" className="form-control" onChange={handleInput} value={student.firstname}/>
                    </div>

                    <div className="mb-3">
                        <label>Last Name</label>
                        <input type="text" name="lastname" className="form-control" onChange={handleInput} value={student.lastname}/>
                    </div>
                    <div className="mb-3">
                        <label>Email Address</label>
                        <input type="text" name="email" className="form-control" onChange={handleInput} value={student.email}/>
                    </div>
                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input type="text" name="phone" className="form-control" onChange={handleInput} value={student.phone}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Save Student</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentCreate;
