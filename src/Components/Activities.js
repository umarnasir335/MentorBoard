import React, { Component } from 'react'
import Courses from './courses/Courses'
import Navbar from './Navbar';

export class Activities extends Component {
    render() {
        return (
            <div className= "App-body">
            <Courses />
            </div>
        )
    }
}

export default Activities
