// import React from 'react'
// import { jImages } from '../shared/constantData/staticData'
// import './external.css';
// import { Card } from 'react-bootstrap';
// // import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// const ProductComp = () => {
//     return (
//         <div>
//             {/* <strong className='heading' >Products</strong>
//             <img src={jImages.jewel1} alt='img1'/>
//             <img src={jImages.jewel2} alt='img2'/>
//             <img src={jImages.jewel3} alt='img3'/>
//             <Card className='card1'>
//                 <h2  className='card_h2'>Title</h2>
//                 <img src={jImages.jewel1} style={{width: "175px"}} alt='img1'/>
//                 <p>Description</p>
//             </Card> */}

//              <CardGroup>
//                   <Card>
//                     <Card.Img src={jImages.jewel11} />
//                       <Card.Body className='card_product'>
//                         <Card.Title>Gold Bangles</Card.Title>
//                         <Card.Text>
//                           TModish 22 Karat Yellow Gold Floral
//                         </Card.Text>
//                       </Card.Body>
//                       <Card.Footer>
//                         <small className="text-muted" >Price: &#8377;10000</small>
//                       </Card.Footer>
//                   </Card>
// {/* {"   "} */}
//                   <Card>
//                     <Card.Img src={jImages.jewel15} />
//                     <Card.Body className='card_product'>
//                       <Card.Title>Card title</Card.Title>
//                       <Card.Text>
//                         TFlashy Floral Stud.{' '}
//                       </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                       <small className="text-muted">Price: &#8377;1000</small>
//                     </Card.Footer>
//                   </Card>
//   {/* {"  "} */}
//                   <Card>
//                     <Card.Img src={jImages.jewel13} />
//                     <Card.Body className='card_product'>
//                       <Card.Title>Card title</Card.Title>
//                       <Card.Text>
//                       Glorious 22 Karat Yellow Gold Floral Rining
//                       </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                       <small className="text-muted">Price: &#8377;1000</small>
//                     </Card.Footer>
//                   </Card>
//     </CardGroup>

//         </div>
//     )
// }

// export default ProductComp




import React from 'react';
import { jImages } from '../shared/constantData/staticData';
import './external.css';
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';

const ProductComp = () => {
    return (
      <div>
         <strong className="heading_product">Our Products</strong> <hr/> 
        <div className="product-container">
            <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel11} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Gold Bangles</Card.Title>
                        <Card.Text>
                            Modish 22 Karat Yellow Gold Floral
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 31,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>    
        {/* </div> */}

        {/* <div className="product-container"> */}
          <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel15} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Floral Studs</Card.Title>
                        <Card.Text>
                            Flashy Floral Studs.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 45,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>      
        {/* </div> */}

        {/* <div className="product-container"> */}
            <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel13} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Floral Ring</Card.Title>
                        <Card.Text>
                            Glorious 22 Karat Yellow Gold Floral Ring
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 28,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>

        <div className="product-container">
            <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel11} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Gold Bangles</Card.Title>
                        <Card.Text>
                            Modish 22 Karat Yellow Gold Floral
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 31,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>    
        {/* </div> */}

        {/* <div className="product-container"> */}
          <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel15} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Floral Studs</Card.Title>
                        <Card.Text>
                            Flashy Floral Studs.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 45,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>      
        {/* </div> */}

        {/* <div className="product-container"> */}
            <CardGroup>
                <Card className="product-card">
                    <Card.Img variant="top" src={jImages.jewel13} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Floral Ring</Card.Title>
                        <Card.Text>
                            Glorious 22 Karat Yellow Gold Floral Ring
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <small className="text-muted">Price: &#8377; 28,000</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
      </div>  
    );
};

export default ProductComp;
