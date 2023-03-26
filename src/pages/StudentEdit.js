import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function StudentEdit() {

  let { id } = useParams()
    
    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    const [student, setStudent] = useState({})

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/students/${id}/edit`).then(res => {
          console.log(res)
          setStudent(res.data.student);
          setLoading(false);
      })
      .catch(function (error) {
        if(error.response){
            if(error.response.status === 404){
              alert(error.response.data.message)
              setLoading(false);
          }
            if(error.response.status === 500){
                alert(error.response.data)
                setLoading(false);
            }
        }
    });

  }, [id])

    const handleInput = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
    }

    const updateStudent = (e) => {
        e.preventDefault();

        setLoading(true);
        const data = {
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            phone: student.phone,
        }

        axios.put(`http://127.0.0.1:8000/api/students/${id}/edit`, data).then(res => {

            alert(res.data.message);
       
            setLoading(false);
        })
        .catch(function (error) {
            if(error.response){
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if(error.response.status === 404){
                  alert(error.response.data.message)
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

    if(Object.keys(student).length === 0){
      return (
        <div className="container">
            <h4>No Such Student Id Found</h4>
        </div>
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
                  Edit Student
                  <Link
                    to="/students"
                    className="btn btn-danger float-end"
                  >
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={updateStudent}>
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
                        <button type="submit" className="btn btn-primary">Update Student</button>
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
export default StudentEdit;
