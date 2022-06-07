import axios from "axios";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class Addstudent extends Component {

    state = {
        name: "",
        course: "",
        email: "",
        phone: "",
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveStudent = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8000/api/add-student", this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: "",
                course: "",
                email: "",
                phone: "",
            });
        }

    }

  
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Student
                                    <Link to="/" className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent} >
                                    <div className="form-group mb-3">
                                        <label>Student Name</label>
                                        <input type="text" name="name" value={this.state.name} onChange={this.handleInput}  className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Course</label>
                                        <input type="text" name="course" value={this.state.course} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Email</label>
                                        <input type="email" name="email" value={this.state.email} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Phone</label>
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default Addstudent;