import React,{ useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Course.css';
import Details from '../Course-Details/Details';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course,setCourse] = useState(fakeData);
    const [cart,setCart] = useState([])
    const handleAddCourse =(course)=>{
      const newCart=[...cart,course]
      setCart(newCart)
    }
  
    return (
        <div className="course-container">
            <div className="course-style">
             {
   course.map(course=><Details course={course} handleAddCourse={handleAddCourse} key={course.id}></Details>)
 }
 </div>
 <div className="cart-container">
        <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Course;