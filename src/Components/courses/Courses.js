import React, { Component } from 'react'
import CourseItem from './CourseItem'

export class Courses extends Component {
    state = {
        courses: [
            {
                key: '1',
                class_name: 'Guitar Class',
                class_type: 'Music',
                class_time: '4am - 5pm',
                image_url:'https://image.shutterstock.com/image-vector/question-mark-symbol-circle-button-260nw-1480512578.jpg'
            },
            {
                key: '2',
                class_name: 'Piano Class',
                class_type: 'Music',
                class_time: '4pm - 5am',
                image_url:'https://image.shutterstock.com/image-vector/question-icon-vector-flat-design-600w-519699817.jpg'
            },
            {
                key: '3',
                class_name: 'Math Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm',
                image_url:'https://image.shutterstock.com/image-vector/question-icon-vector-flat-design-600w-519699817.jpg'
            },
            {
                key: '4',
                class_name: 'Drums Class',
                class_type: 'Music',
                class_time: '4am - 5pm',
                image_url:'https://image.shutterstock.com/image-vector/question-icon-vector-flat-design-600w-519699817.jpg'
            },
            {
                key: '5',
                class_name: 'Keyboard Class',
                class_type: 'Music',
                class_time: '4pm - 5am',
                image_url: 'https://image.shutterstock.com/image-vector/question-icon-vector-flat-design-600w-519699817.jpg'
            },
            {
                key: '6',
                class_name: 'Algebra Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm',
                image_url: 'https://image.shutterstock.com/image-vector/question-icon-vector-flat-design-600w-519699817.jpg'
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
    gridGap: '4rem'
}

export default Courses
