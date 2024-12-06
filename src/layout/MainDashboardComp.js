import React from 'react'
import {Outlet} from 'react-router-dom'
import NavComp from './NavComp'
import { jImages } from '../shared/constantData/staticData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './MainDashboardComp.css'


const MainDashboardComp = () => {
    return (
        <div className='container mt-1' style={{backgroundColor: "blanchedalmond"}}>
            <img src={jImages.b_logo1} alt=''className='logo' height="100px" width="100px">
            </img> 
            <h2 className='logo-title' style={{textAlign:"center"}}>BMP Jewelry</h2>

            <div className='card'>
                <div className='card-header '>
                    <NavComp/>
                </div> {" "}
                
                <div className='card-body' >
                        <Outlet/>
                </div>
                
                {/* <div className='card-footer border-primary'>
                <p className='text-primary'style={{textAlign:"center"}}> this app is design and developed by <strong>Bhagyesh Patil</strong></p>
                </div> */}

<div className='card-footer border-primary'>
  {/* <p className='text-primary' style={{ textAlign: "center" }}>
    this app is designed and developed by <strong><a href="https://bhagyesh-21.github.io/Portfolio_Website/" target="_blank" rel="noopener noreferrer">Bhagyesh Patil</a></strong>
  </p> */}
  

  <div className='container2'>
  <p className='text-primary'>
    this app is designed and developed by 
    <strong>
      <a href="https://bhagyesh-21.github.io/Portfolio_Website/" target="_blank" rel="noopener noreferrer">
        Bhagyesh Patil
      </a>
    </strong>
  </p>
  <div className="social-icons">
    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link"> 
      <FontAwesomeIcon icon={faInstagram} size="2x" /> 
    </a> 
    <a href="https://wa.me/yourphonenumber" rel="noopener noreferrer" className="social-link"> 
      <FontAwesomeIcon icon={faWhatsapp} size="2x" /> 
    </a> 
    <a href="https://www.linkedin.com/in/bhagyesh-patil-09aa49265/" target="_blank" rel="noopener noreferrer" className="social-link"> 
      <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
    </a>
    <a href="https://github.com/Bhagyesh-21" target="_blank" rel="noopener noreferrer" className="social-link"> 
      <FontAwesomeIcon icon={faGithub} size="2x" /> 
    </a>
  </div>
</div>




</div>

            </div>
            
        </div>
    )
}

export default MainDashboardComp
