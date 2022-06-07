import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Student extends Component {
  state = {
    students: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/students");
    if (res.data.status === 200) {
      this.setState({
        students: res.data.students,
        loading: false,
      });
    }
  }

  render() {

    var student_HTML_TABLE = '';

    if (this.state.loading) {
        student_HTML_TABLE = <tr><td colspan="7"><h2 className="text-center">Loading...</h2></td></tr>;
    } else {
        student_HTML_TABLE = this.state.students.map((student, index) => {
            return (
                <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <Link to={`/edit-student/${student.id}`} className="btn btn-primary btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteStudent(student.id)}>Delete</button>
                    </td>
                </tr>
            );
        });
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Student Data
                  <Link
                    to="/add-student"
                    className="btn btn-primary btn-sm float-end"
                  >
                    Add Student
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Course</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student_HTML_TABLE}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
