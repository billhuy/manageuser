import React, { Component } from 'react';

class TableDataRow extends Component {
    permisionShow = ()=>{
        if(this.props.permision ===1) return 'Admin';
        else if(this.props.permision ===2) return 'Moderator';
        else return 'Normal'
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (userId)=>{
        this.props.deleteButtonClick(userId);
        
    }
    render() {
        return (
            <tr>
                        <td >{this.props.sst}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.tel}</td>
                        <td>{this.permisionShow()}</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-info" onClick={()=>this.editClick()} >
                            <i className="fa fa-edit" 
                            /> Edit</div>
                            <div className="btn btn-danger" onClick={(userId)=>this.deleteButtonClick(this.props.id)}> 
                            <i className="fa fa-delete"/>
                            Delete</div>
                        </div>
                        </td>
                    </tr>
        );
    }
}

export default TableDataRow;
