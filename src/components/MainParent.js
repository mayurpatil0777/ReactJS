import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import EditPopup from './EditPopup';
//import $ from 'jquery';

class MainParent extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            dsplyLName:false,
            isShowingEdit: false,
            editedUserName:'',
            editedFirstName:'',
            userName:"",
            fName:"",
            lName:"",
            age:"",
            address:"",
            gender:"",
            personArr:[]
        }
  //      this.openModalHandlerEdit=this.openModalHandlerEdit.bind('this')
  
    }
    
    uNameChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            userName:e.target.value,
            dsplyFName:true
        })
    }

    fNameChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            fName:e.target.value,
            dsplyLName:true,
            isShowingEdit:false
        })
    }

    lNameChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            lName:e.target.value,
            dsplyAge:true
        })
    }
    ageChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            age:e.target.value,
            dsplyAddress:true
        })
    }
    addressChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            address:e.target.value,
            dsplyGender:true
        })
    }
    genderChange1= (e) =>{
        console.log("username",e.target.value)
        this.setState({
            gender:e.target.value,
            dsplySubmit:true
        })
    }

    
    submitHandler = (e)=>{
        let arr=this.state.personArr;
        console.log("arrrrr starting",this.state.personArr)
        
        let {userName,fName,lName,age,address,gender}=this.state
        
        let personObj={
            userName:userName,
            fName:fName,
            lName:lName,
            age:age,
            address:address,
            gender:gender
        }   
        arr.push(personObj);
        e.preventDefault()
        this.setState({
            personArr:arr,
        },()=>{
            console.log("arrrrr",this.state.personArr)
            
            this.setState({
                userName:'',
                fName:'',
                lName:'',
                age:'',
                address:'',
 //               gender:''
            });
        });
        console.log("print state value ",this.state);
//        console.log("pers",personObj)
    }

    

    onClear=()=>{
        console.log("inside onclear");
        this.setState({
            userName:''
        });
    }
    
    openModalHandlerEdit = (editRow) => {
        console.log("inddd",editRow)
        let editedPersonObj={
            editedIndex: editRow.index,
            editedUserName: editRow.row.userName,
            editedFirstName: editRow.row.fName,
            editedLastName: editRow.row.lName,
            editedAge: editRow.row.age,
            editedAddress: editRow.row.address,
            editedGender: editRow.row.gender
        };
        this.setState({
            isShowingEdit: true,
            editedPersonObj:editedPersonObj
            

        },() => {console.log("rowwwww",editRow,this.state.editedUserName,this.state.editedFirstName);
        
        console.log("editedRow",editedPersonObj)
    }
        )
    }
    closeModalHandlerEdit = () => {
        this.setState({
            isShowingEdit: false
        });
    }
 
    saveAfterEdit=()=>{
  //      console.log("save",savePersonObj)
    }

    openModalHandlerDelete=(editRow)=>{
        console.log("del")
    }
    render() {
        
        return (
            <div>
                
                {this.state.isShowingEdit && <EditPopup
                    className="modal"
                    showEdit={this.state.isShowingEdit}
                    closeEdit={this.closeModalHandlerEdit}
                    saveEdit={this.saveAfterEdit}
                    editedPersonObj={this.state.editedPersonObj}>
                        
                </EditPopup>}
                <div className="col-12">
                <div className="row">
                    <div className="col-4">
                        <LeftPanel 
                            uNameChange={this.uNameChange1}
                            fNameChange={this.fNameChange1}
                            lNameChange={this.lNameChange1}
                            ageChange={this.ageChange1}
                            addressChange={this.addressChange1}
                            genderChange={this.genderChange1}
                            validate={this.state}
                            submitHandler={this.submitHandler}
                            onClear={this.onClear}
                         />
                    </div>
                    <div className="col-8">
                        <RightPanel dataFromParent = {this.state.personArr}
                         openModalHandlerEdit={(row)=>this.openModalHandlerEdit(row)} 
                         closeModalHandlerEdit={this.closeModalHandlerEdit}
                         openModalHandlerDelete={this.openModalHandlerDelete}
                         isShowingEdit={this.state.isShowingEdit}
                         />

                    </div>
                </div>
               </div> 
            </div>
        );
    }
}

export default MainParent;