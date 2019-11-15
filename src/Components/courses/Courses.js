import React, { Component } from 'react'
import CourseItem from './CourseItem'

export class Courses extends Component {
    state = {
        courses: [
            {
                key: '1',
                class_name: 'Guitar Class',
                class_type: 'Music',
                class_time: '4am - 5pm'
            },
            {
                key: '2',
                class_name: 'Piano Class',
                class_type: 'Music',
                class_time: '4pm - 5am'
            },
            {
                key: '3',
                class_name: 'Math Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm'
            },
            {
                key: '4',
                class_name: 'Guitar Class',
                class_type: 'Music',
                class_time: '4am - 5pm'
            },
            {
                key: '5',
                class_name: 'Piano Class',
                class_type: 'Music',
                class_time: '4pm - 5am'
            },
            {
                key: '6',
                class_name: 'Math Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm'
            }
        ]
    }

    render() {
        return (
            <div style ={courseStyle}>
                {this.state.courses.map(course => (
                     <CourseItem key = {course.key} course = {course}/>
                ))}
            </div>
        )
    }
}

const courseStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '5rem'
}

export default Courses
