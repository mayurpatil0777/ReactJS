import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import { Edit, Delete } from '@material-ui/icons';

class RightPanel extends Component {
    
    render() {
 //       console.log("rightpers",this.props)
        let {dataFromParent} =this.props;
        const data = dataFromParent?dataFromParent:[];

  //      const data1 = dataFromParent?[dataFromParent]:[];
        const columns = [{
            Header: 'Name',
            accessor: 'userName',
            
            
        }, {
            Header: 'First Name',
            accessor: 'fName'
        },
        {
            Header: 'Last Name',
            accessor: 'lName'
        },
        {
            Header: 'Age',
            accessor: 'age'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
        {
            Header: 'Gender',
            accessor: 'gender'
        },
        {
            Header: 'Edit',
            Cell: row => (
                <div>
                    
                    <span className="pointer" onClick={()=>this.props.openModalHandlerEdit(row)} ><Edit></Edit></span>
                    <span className="pointer" onClick={()=>this.props.openModalHandlerDelete(row)}><Delete></Delete></span>
                </div>
            )
        }]
        return (
                       <div>
                {<ReactTable id="myTable"
                    data={data}
                    columns={columns}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}
                    
                />}
               
                {/* <div>hi:{data1 && data1.length > 0 ? data1[0]["age"]:''}</div> */}
                
              </div>
        );
    }
}

export default RightPanel;