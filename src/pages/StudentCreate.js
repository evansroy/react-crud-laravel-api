import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function StudentCreate() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [inputErrorList, setInputErrorList] = useState({})
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

        setLoading(true);
        const data = {
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            phone: student.phone,
        }

        axios.post(`http://127.0.0.1:8000/api/students`, data).then(res => {

            alert(res.data.message);
            navigate('/students')
            setLoading(false);
        })
        .catch(function (error) {
            if(error.response){
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });
    }

    if(loading){
        return(
            <Loading/>
        )
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
                        <span className="text-danger">{inputErrorList.firstname}</span>
                    </div>

                    <div className="mb-3">
                        <label>Last Name</label>
                        <input type="text" name="lastname" className="form-control" onChange={handleInput} value={student.lastname}/>
                        <span className="text-danger">{inputErrorList.lastname}</span>
                    </div>
                    <div className="mb-3">
                        <label>Email Address</label>
                        <input type="text" name="email" className="form-control" onChange={handleInput} value={student.email}/>
                        <span className="text-danger">{inputErrorList.email}</span>
                    </div>
                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input type="text" name="phone" className="form-control" onChange={handleInput} value={student.phone}/>
                        <span className="text-danger">{inputErrorList.phone}</span>
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
