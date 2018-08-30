import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:"",
            userObj: {}
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info)
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStatus) {
            return <EditUser 
            getUserEditInfo = {(info)=>this.getUserEditInfo(info)}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
            userEditObject = {this.props.userEditObject}
            />
        }
    }
    isChange = (event)=>{
        console.log(event.target.value);
        this.setState(
            {tempValue:event.target.value}
        );
        this.props.checkConnectProps(this.state.tempValue);
    }
    showButton = ()=>{
        if(this.props.showFormStatus) {
            return <div className="btn btn-block btn-outline-danger" onClick={()=>this.props.ketNoi()}>Close</div>
        } else {
            return <div className="btn btn-block btn-outline-success" onClick={()=>this.props.ketNoi()}>Add new User</div>
        }
    }
    render() {
        return (
            <div className="container">
            {this.isShowEditForm()}
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Input keyword..." onChange={(event)=>this.isChange(event)}/>
                <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={(dl)=>{this.props.checkConnectProps(this.state.tempValue)}}>Search</button>
                </div>
            </div>
            {this.showButton()}
            <hr />
            </div>
        );
    }
}

export default SearchForm;
