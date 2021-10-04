import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import './Service.css'

const Service = () => {
    const[courses, setCourses]= useState([]); 

    useEffect(() =>{
        fetch('/IELTS.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div >
        <h1 style={{color:"green"}}>Our Service</h1>
        <div >
        {
          courses.map(course => <Detail
          key={course.name}
          course={course}
          >
          </Detail>)
        }
        </div>
       </div>
    );
};

export default Service;