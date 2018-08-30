import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
// import AddUser from './AddUser';
import AddUser2 from './AddUser2';

import dataUser from './DataUser.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormStatus:false,
      data:[],
      searchText:"",
      editUserStatus:false,
      userEditObject:{},
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null) {
      localStorage.setItem('userData', JSON.stringify(dataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
    // console.log('Du lieu nhan duoc la:' +this.state.searchTextl);
  }
  getNewUserData = (name,tel,permision) => {
    var item = {};
        item.id=uuidv1();;
        item.name=name;
        item.tel=tel;
        item.permision=permision;
        var items = this.state.data;
        // console.log(item);
        items.push(item);
        this.setState({
          data:items
        });
    // console.log('ket noi thanh cong');
    // console.log(this.state.data);
    localStorage.setItem('userData', JSON.stringify(items));

  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  changeFormStatus = ()=>{
    this.setState({
      showFormStatus: !this.state.showFormStatus
    });
  };
  editUser = (user) => {
    console.log('Edit User thanh cong roi do');
    this.setState({
      userEditObject:user
    });
    console.log(user);
  }
  getUserEditInfoApp = (info)=>{
    console.log('Thong tin da sua xong la:' +info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permision = info.permision;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  deleteUser = (userId)=>{
    var tempData = this.state.data.filter(item=>item.id !== userId);
    this.setState({
      data:tempData
    });
    // console.log(userId);
    // var tempData = this.state.data;
    // tempData.forEach((value,key)=>{
    //   if(value.id === userId) {
    //     console.log(key);
        
    //   }
    // })
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  render(){
    // localStorage.setItem('userData',JSON.stringify(dataUser));
    // console.log(this.state.data);
    var result=[];
    this.state.data.forEach(((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item)
      }
    }))
    // console.log(result);
    
    return (
      <div>
        <Header/>
      <SearchForm
      checkConnectProps = {(dl)=>this.getTextSearch(dl)}
      ketNoi={()=>this.changeFormStatus()}
      showFormStatus = {this.state.showFormStatus}
      searchFunctionProps ={(text)=>this.getTextSearch(text)}
      editUserStatus = {this.state.editUserStatus}
      changeEditUserStatus = {()=>this.changeEditUserStatus()}
      userEditObject = {this.state.userEditObject}
      getUserEditInfoApp = {(info)=>this.getUserEditInfoApp(info)}
      />
      <div className="container">
        <div className="row">
        <TableData
        editFun = {(user) => this.editUser(user)}
        dataUserProps={result}
        changeEditUserStatus = {()=>this.changeEditUserStatus()}
        deleteUser = {(userId)=>this.deleteUser(userId)}
        />
        <AddUser2
        add={(name,tel,permision)=>this.getNewUserData(name,tel,permision)}
        showFormStatus = {this.state.showFormStatus}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
