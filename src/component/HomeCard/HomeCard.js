import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const HomeCard = () => {
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="course-card  mx-auto mt-5 gap-5">
            {
                courses.slice(0,4).map(course=><Course
                key={course.key}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default HomeCard;