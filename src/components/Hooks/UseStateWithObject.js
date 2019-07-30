import React, { useState } from 'react';
import $ from 'jquery'
$('#abc').bind("cut copy paste",function(e) {
    e.preventDefault();
});
function UseStateWithObject() {
    
    const [name, setName] = useState({ 'firstName': '', 'lastName': '' })
    return (
        <div>
            <input type="text" value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
                placeholder="Enter your first name"
                className="form-control">
            </input>
            <h5 className="mt-3">First Name=>{name.firstName}</h5>
            <input type="text" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })}
            placeholder="Enter your last name"
            className="form-control mt-4"></input>
            <h5 className="mt-3">Last Name=>{name.lastName}</h5>
            <textarea id="abc" className="mt-4 form-control" value={JSON.stringify(name)} readOnly unselectable="on"></textarea>

        </div>
    );

}
export default UseStateWithObject;