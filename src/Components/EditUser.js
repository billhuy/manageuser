import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permision:this.props.userEditObject.permision,
        }
    }
    
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton = ()=>{
        
        var info={};
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permision=this.state.permision;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col">
                <form>
                    <div className="card mt-2 text-white bg-secondary">
                        <div className="card-header text-center">
                        Fix user info
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input 
                                defaultValue={this.props.userEditObject.name}
                                onChange={(event)=>this.isChange(event)}
                                type="text" name="name" className="form-control" placeholder="User name" />
                                <br />
                                <input 
                                defaultValue={this.props.userEditObject.tel}
                                onChange={(event)=>this.isChange(event)}
                                type="text" name="tel" className="form-control" placeholder="Phone number" />
                                <br/>
                                <div className="form-group">
                                {/* <label >Select permision</label> */}
                                <select onChange={(event)=>this.isChange(event)}  defaultValue={this.props.userEditObject.permision} className="form-control" name="permision">
                                    <option value>Select Permision</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                                <br />
                                <div className="form-group">
                                <input type="button" className="btn btn-block btn-danger" value="Save User" 
                                onClick={()=>this.saveButton()}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
        );
    }
}

export default EditUser;
