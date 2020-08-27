import React from 'react';
import './Details.css';
const Details = (props) => {
    // console.log(props.course);
    const handleAddCourse =props.handleAddCourse;
    const {name,price,img} =props.course
    return (
        <div className="details"> 
        <div>
            <img src={img} alt=""/>
        </div>
        <div className="details-text">      
     <h4>Course: {name}</h4><br/>
        <p>Price:${price}</p>
        <button onClick={()=>handleAddCourse(props.course)} className="btn btn-primary">Enroll Now</button>
        </div>

        </div>
    );
};

export default Details;