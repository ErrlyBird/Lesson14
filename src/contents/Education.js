import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Development" where="Wake Technical Community College" from="June 2019" to="Present"/>
            <Widecard title="GED" where="Wake Technical Community College" from="2010" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    