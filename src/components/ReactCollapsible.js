import React, { Component } from 'react';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'

class ReactCollapsible extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="col-8">
                <div>
            <CollapsibleComponent>
                <CollapsibleHead isExpanded={true}>Head title 1</CollapsibleHead>
                <CollapsibleContent isExpanded={true}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex </p>
                </CollapsibleContent>
 
                <CollapsibleHead>Head title 2</CollapsibleHead>
                <CollapsibleContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CollapsibleContent>
 
                <CollapsibleHead>Head title 3</CollapsibleHead>
                <CollapsibleContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. </p>
                </CollapsibleContent>
            </CollapsibleComponent>
        </div>
                </div>
             </div>
        );
    }
}

export default ReactCollapsible;