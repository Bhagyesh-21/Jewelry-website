import React from 'react'
import { jImages } from '../shared/constantData/staticData'
import './external.css';

const AboutComp = () => {
    return (
        <div>
            <strong className='heading_about'>About Us</strong> <hr/>
        <div className='aboutus' style={{display:"flex"}}>
            <img src={jImages.B1} className="about_img" alt='person1 img' style={{margin:"40px 40px 40px 160px", height:"220px"}} className='aboutus1' /> 
            <p style={{margin:"50px 150px 40px 20px" }}>Our company was founded in 2010 by a group of passionate individuals who shared
                a common goal of providing high-quality jewelry to our customers. We have since grown
                into a leading online retailer of fine jewelry, offering a wide range of products that cater to
                diverse tastes and preferences.</p>
        </div>

        <hr/>

        <div className='aboutus' style={{display:"flex"}}>
        <p style={{margin:"50px 20px 40px 150px" }}>Our company was founded in 2010 by a group of passionate individuals who shared
                a common goal of providing high-quality jewelry to our customers. We have since grown
                into a leading online retailer of fine jewelry, offering a wide range of products that cater to
                diverse tastes and preferences.</p>
            <img src={jImages.B1 } className="about_img" alt='person2 img' style={{margin:"40px 160px 40px 40px", height:"220px"}} className='aboutus1' /> 

        </div>
                
            </div>
    )
}

export default AboutComp
