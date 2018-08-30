import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : true,
            id:"",
            name:"",
            tel:"",
            permision:"",
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
        var item = {};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.permision=this.state.permision;
        // console.log(item);
    }
    showForm = ()=>{
        // console.log(this.state);
        if(this.props.showFormStatus) {
            return (
                <div className="col">
                <form>
                    <div className="card mt-2">
                        <div className="card-header">
                        Add new user in system
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" name="name" onChange={(event)=>{this.isChange(event)}} className="form-control" placeholder="User name" />
                                <br />
                                <input type="text" name="tel" onChange={(event)=>{this.isChange(event)}} className="form-control" placeholder="Phone number" />
                                <br/>
                                <div className="form-group">
                                {/* <label >Select permision</label> */}
                                <select className="form-control" onChange={(event)=>{this.isChange(event)}} name="permision">
                                    <option value>Select Permision</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                                <br />
                                <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permision)=>{this.props.add(this.state.name,this.state.tel,this.state.permision)} } value="Add user"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        // console.log(this.props.showFormStatus);
        // console.log(this.state);
        return (
            <div>{this.showForm()}</div>
        );
    }
}

export default AddUser;
