import React, { Component } from 'react';
import axios from 'axios'

class AppFlow extends Component {
    
    putDataToDB = (message) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post('http://localhost:3001/api/putData', {
          id: idToBeAdded,
          message: message,
        });
      };

   
    render() {
        return (
            <div>
                 <div className="col-12 mt-3">
                <div className="row">
                    
                    <div className="col">
                        <input type="text" name="nameForPerson" onChange={(e) => this.setState({ message: e.target.value })} className="form-control" placeholder="Enter your name" ></input>
                    </div>
                  
                    <div className="col">
                    <button className="btn btn-success" onClick={() => this.putDataToDB(this.state.message)}>Post</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppFlow;