import React, { Component } from 'react';
//import $ from 'jquery';

    class EditPopup extends Component {
        constructor(props) {
            super(props);
            this.state={
                editedUserName:'',
                editedFirstName:'',
                editedLastName:'',
                editedAge:'',
                editedAddress:'',
                editedGender:''
            }
        }
        

        editUserNameChange=(ev)=>{
           this.setState({
                [ev.target.name]:ev.target.value,
               
            },()=>console.log("yesssss",this.state))
        }

        componentDidMount(){
            if(this.props.editedPersonObj){
                let {editedUserName,editedFirstName,editedLastName,editedAge,editedAddress,editedGender,editedIndex}=this.props.editedPersonObj;
    //            console.log("hey",editedUserName,editedFirstName,editedLastName,editedAge,editedAddress,editedGender)
                 this.setState({
               //      editedPersonObj:this.props.editedPersonObj
                editedUserName:editedUserName,
                editedFirstName:editedFirstName,
                editedLastName:editedLastName,
                editedAge:editedAge,
                editedAddress:editedAddress,
                editedGender:editedGender,
                editedIndex:editedIndex
                 });
            }
        }

        render(){

   // console.log("edited object",editedPersonObj.editedUserName)
    return (
        <div className="popup-bg">
            <div className="modal-wrapper"
                style={{
                    transform: this.props.showEdit ? 'translate(-50%,-50%)' : 'translateY(-100vh)',
                    opacity: this.props.showEdit ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h4>Modal Header</h4>
                    <span className="close-modal-btn" onClick={this.props.closeEdit}>×</span>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col mt-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Username</span>
                                </div>
                                <input type="text" className="form-control" name='editedUserName' value={this.state.editedUserName} onChange={(ev)=>this.editUserNameChange(ev)}  required></input>
                            </div>
                        </div>
                        <div className="col mt-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">First Name</span>
                                </div>
                                <input type="text" className="form-control" name='editedFirstName' value={this.state.editedFirstName} onChange={(ev)=>this.editUserNameChange(ev)} required></input>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Last Name</span>
                                </div>
                                <input type="text" className="form-control" name='editedLastName' value={this.state.editedLastName} onChange={(ev)=>this.editUserNameChange(ev)} required></input>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Age</span>
                                </div>
                                <input type="number" className="form-control" name='editedAge' value={this.state.editedAge} onChange={(ev)=>this.editUserNameChange(ev)} required></input>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Address</span>
                                </div>
                                <textarea className="form-control" name='editedAddress' value={this.state.editedAddress} onChange={(ev)=>this.editUserNameChange(ev)} required></textarea>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Gender</span>
                                </div>
                                <input type="radio" value="Female" className="ml-3 mt-3" name='editedGender' checked={this.state.editedGender === 'Female'} onChange={(ev)=>this.editUserNameChange(ev)} required /><span className="ml-1 mt-2 pointer">Female</span>
                                <input type="radio" value="Male" className="ml-3 mt-3" name='editedGender' checked={this.state.editedGender === 'Male'} onChange={(ev)=>this.editUserNameChange(ev)} /><span className="ml-1 mt-2 pointer">Male</span>
                                <input type="radio" value="Other" className="ml-3 mt-3" name='editedGender' checked={this.state.editedGender === 'Other'} onChange={(ev)=>this.editUserNameChange(ev)} /><span className="ml-1 mt-2 pointer">Other</span>
                             </div>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue btn-sm" onClick={this.props.saveEdit} savePersonObj={this.state}>Save</button>
                    <button className="btn-cancel btn-sm" onClick={this.props.closeEdit}>Close</button>
                </div>
            </div>
        </div>
    )
}
}

export default EditPopup