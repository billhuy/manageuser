import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : true
        }
    }
    changeButton = ()=>{
        this.setState({
            status: !this.state.status
        });
    }
    displayButton = ()=>{
        if(this.state.status) {
            return <div className="btn btn-block btn-outline-danger" onClick={()=>this.changeButton()}>Close Form</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.changeButton()}>Add New User</div>
        }
    }
    changeForm = ()=>{
        if(this.state.status) {
            return (
                <div className="card mt-2">
                <div className="card-header">
                Add new user in system
                </div>
                <div className="card-body">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="User name" />
                    <br />
                    <input type="text" className="form-control" placeholder="Phone number" />
                    <br/>
                    <div className="form-group">
                    <label >Select permision</label>
                    <select className="form-control" >
                        <option>Admin</option>
                        <option>Moderator</option>
                        <option>Normal</option>
                    </select>
                    </div>
                    <br />
                    <div className="form-group">
                    <div className="btn btn-block btn-primary">Add user</div>
                    </div>
                </div>
                </div>
            </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
            {this.displayButton()}
            {this.changeForm()}
            
            </div>
        );
    }
}

export default AddUser;
