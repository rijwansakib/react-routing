import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="course-card  mx-auto mt-5 gap-5">
            {
                courses.map(course=><Course
                key={course.key}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default Services;