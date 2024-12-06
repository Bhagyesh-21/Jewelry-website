import React, { Component } from 'react'
import { jImages } from "../shared/constantData/staticData.js"
import { Carousel } from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
import bootstrap from 'bootstrap';
import './external.css';

export class HomeComp extends Component {
  render() {
    return (
      <div>
        <strong className='home_heading'>Home</strong> <hr/>
      {/* <Button></Button> */}
       {/* / <img src={jImages.jewel1} alt='' /> */}

        <Carousel>
      <Carousel.Item>

        <img src={jImages.jewel_c3} alt=' ' style={{width:"100%", height:"400px"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={jImages.jewel_c2} alt=' ' style={{width:"100%", height:"400px"}}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={jImages.jewel_c1} alt=' ' style={{width:"100%", height:"400px"}} />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<br/> <hr/> <br/>
        <strong className='strong'>Journey </strong>
             <p className='home_p'>
                 The journey of <b>BMP</b> started with the launch of 18k gold watches studded with precious stones in 1994. But, it soon grew into a 22K jeweller who presented a stunning range of gold and diamond jewellery. The term BMP was coined by Mr. Bhagyesh very first state-of-art jewellery factory with a proper karigaar park was set up in Maharashtra
              </p>
     <br/> <br/>

     <strong className='strong'>Innovations </strong>
              <p className='home_p'>
                  At BMP, jewellery is not a product but a manifestation of artistry and our exquisite range of jewel pieces strike the perfect balance between traditional charm and contemporary appeal. With designs that capture the beauty and celebration of special occasions in the life of the Indian woman,  
              </p>
    <br/> <br/>

    <strong className='strong'>Excellence </strong>
              <p className='home_p'>
                    At <b>BMP</b>, we strive to deliver excellence, consistently. We've brought to the market a whole new standard of business ethics and product reliability, in the process bringing about a transformation in which jewellery is bought or sold in India. With innovations like the Karatmeter to check the purity of gold, the brand has won over the customer’s hearts. 
              official websire: https://react-bootstrap.github.io/
              </p>
      </div>
    )
  }
}

export default HomeComp