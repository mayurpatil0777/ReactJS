import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table'
import users from './baseline-group-24px.svg'

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state={
            userInfo:[],
            hideDivGET:false
        }
    }
    
    hideGET=()=>{
        this.setState({
            hideDivGET:!this.state.hideDivGET
        })
    }
    changeForPOST=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    postData=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log("post success",response)
            .catch(error=>{
                console.log("post failed",error) 
            })
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            this.setState({
                userInfo:response.data
            })
        })  
        .catch(error=>{
            console.log("errrorrr")
        })
    }
    render() {
        const {userInfo} =this.state
        const columns = [{
            Header: 'ID',
            accessor: 'id',
            
            
        }, {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        }]
        return (
            <div>
                <div className="col-12" style={{'background':'#ededed'}}>
                    <div className="">
                        <h4 className="text-center">HTTP GET</h4>
                        { this.state.hideDivGET ===false && (<button className="btn btn-primary btn-sm" onClick={this.hideGET}>Hide</button>)}
                        { this.state.hideDivGET ===true && (<button className="btn btn-primary btn-sm" onClick={this.hideGET}>Show</button>)}
                        
                    </div>
                </div>
               { this.state.hideDivGET ===false && (
                <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-3 text-center pt-5">
                        <div className="row">
                        <div className="col-4">
                        <img src={users} alt="Users"></img>
                        </div>
                        <div className="col-8"> <h2 className="">{userInfo.length}</h2>
                        <h4>No. of Users</h4></div>
                        </div>
                        
                    </div>
                    <div className="col-9">
                    {
                            userInfo.length>0 ?
                            <ReactTable id="myTable"
                            data={userInfo}
                            columns={columns}
                            defaultPageSize={5}
                            pageSizeOptions={[5,10]}
                            
                        />:
                            null
                        } 
                    </div>
                    </div>
                </div>)}

                <div className="col-12 mt-3" style={{'background':'#ededed'}}>
                    <div className="">
                        <h4 className="text-center">HTTP POST</h4>
                       
                    </div>
                </div>
               
                <div className="col-12 mt-3">
                <div className="row">
                    
                    <div className="col">
                        <input type="text" name="inputForPOST" onChange={this.changeForPOST} className="form-control" placeholder="Enter your name" ></input>
                    </div>
                    <div className="col">
                    <select name="selectForPOST" className="form-control" onChange={this.changeForPOST}>
     {userInfo.map((option, index) =>
       <option key={index} value={option.website}>
        {option.website}
       </option>
      )}
    </select>
                    </div>
                    <div className="col">
                        <textarea className="form-control" name="textareaForPOST" placeholder="Enter your address" onChange={this.changeForPOST}></textarea>
                    </div>
                    <div className="col">
                    <button className="btn btn-success form-control" onClick={this.postData}>Post</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Axios;