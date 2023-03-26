import React from "react";
import { Link } from "react-router-dom";

function StudentCreate() {
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentCreate;
