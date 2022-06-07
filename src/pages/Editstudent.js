import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Editstudent extends Component {
  state = {
    name: "",
    course: "",
    email: "",
    phone: "",
    
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    const res = await axios.get(`http://localhost:8000/api/edit-student/${this.props.match.params.id}`);

    alert(res.data);
    if (res.data.status === 200) {
      this.setState({
        name: res.data.student.name,
        course: res.data.student.course,
        email: res.data.student.email,
        phone: res.data.student.phone,
      });
    }

  };

  updateStudent = async (e) => {
    e.preventDefault();
    // const res = await axios.post("http://localhost:8000/api/update-student", this.state);
    // if (res.data.status === 200) {
    //     console.log(res.data.message);
    //     this.setState({
    //         name: "",
    //         course: "",
    //         email: "",
    //         phone: "",
    //     });
    // }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Edit Student
                  <Link to="/" className="btn btn-primary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.updateStudent}>
                  <div className="form-group mb-3">
                    <label>Student Name</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Course</label>
                    <input
                      type="text"
                      name="course"
                      value={this.state.course}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Email</label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Update Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editstudent;
