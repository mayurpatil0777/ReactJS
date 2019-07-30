import React, { Component } from 'react';

class LeftPanel extends Component {
constructor(props) {
    super(props);
    this.state={ 
    }
}
    
/* onClear=(e)=>{
    this.setState({
        userName:''
    })
} */
    
    render() {
    //    console.log('this.props.validate',this.props.validate);
        return (
            <React.Fragment>
                <form>
                <div className="col-md-12 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Username</span>
                        </div>
                        <input type="text" className="form-control" value={this.props.validate.userName}  onChange={this.props.uNameChange} required></input>
                    </div>
                </div>
    { this.props.validate.dsplyFName===true &&(< div className="col-md-12 mt-4 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First Name</span>
                        </div>
                        <input type="text" className="form-control" value={this.props.validate.fName} onChange={this.props.fNameChange} required></input>
                    </div>
        </div>
    )}
                
        { this.props.validate.dsplyLName===true && (<div className="col-md-12 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Last Name</span>
                        </div>
                        <input type="text" className="form-control" value={this.props.validate.lName} onChange={this.props.lNameChange} required></input>
                    </div>
                </div>
        )}
        {this.props.validate.dsplyAge===true && (
                <div className="col-md-12 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Age</span>
                        </div>
                        <input type="number" className="form-control" value={this.props.validate.age} onChange={this.props.ageChange} required></input>
                    </div>
                </div>
        )}
        {this.props.validate.dsplyAddress===true && (
                <div className="col-md-12 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Address</span>
                        </div>
                        <textarea className="form-control" value={this.props.validate.address} onChange={this.props.addressChange} required></textarea>
                    </div>
                </div>
        )}
        {this.props.validate.dsplyGender===true && (
                <div className="col-md-12 mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Gender</span>
                        </div>
                        <input type="radio" value="Female" name="gender" className="ml-3 mt-3" onChange={this.props.genderChange} required/><span className="ml-1 mt-2 pointer">Female</span>
                        <input type="radio" value="Male" name="gender" className="ml-3 mt-3" onChange={this.props.genderChange}/><span className="ml-1 mt-2 pointer">Male</span>
                        <input type="radio" value="Other" name="gender" className="ml-3 mt-3" onChange={this.props.genderChange}/><span className="ml-1 mt-2 pointer">Other</span>
                    </div>
                </div>
        )}    
        {this.props.validate.dsplySubmit===true && (            
            <div className="col-md-12 mt-4">
                    <button className="btn btn-primary" onClick={this.props.submitHandler}>Add Person</button>
                    
                    </div>
        )}
                    </form>
                </React.Fragment>
        );
    }
}

export default LeftPanel;