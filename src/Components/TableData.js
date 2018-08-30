import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (userId)=>{
        this.props.deleteUser(userId);
        
    }
    mappingDataUser = ()=> this.props.dataUserProps.map(((value,key)=>{
        return(        <TableDataRow 
            editFunClick = {(user) => this.props.editFun(value)} 
            key={key} 
            name={value.name} 
            sst={key+1} 
            tel={value.tel} 
            id={value.id}
            permision={value.permision}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
            deleteButtonClick = {(userId)=>this.deleteButtonClick(userId)}
            />
        )
    }))
    render() {
        // console.log(this.props.dataUserProps);
        //this.props.editFun
        return (
            <div className="col">
                <table className="table table-striped {1:striped|sm|bordered|hover|inverse} table-inverse">
                    <thead className="thead-inverse|thead-default">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Permision</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                    </tbody>
                </table>
                </div>
        );
    }
}

export default TableData;
