import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import business from '../assets/Business.png'
import business1 from '../assets/Business1.png'
import business2 from '../assets/Business2.png'
import business3 from '../assets/Business3.png'
import business4 from '../assets/Business4.png'
import business5 from '../assets/Business5.png'
import business6 from '../assets/Business6.png'
import business7 from '../assets/Business7.png'
import business8 from '../assets/Business8.png'

// import IT from '../assets/IT1.png'
// import IT1 from '../assets/IT2.png'
// import IT2 from '../assets/IT3.png'
// import IT3 from '../assets/IT4.png'
// import IT4 from '../assets/IT5.png'
// import IT5 from '../assets/IT6.png'
// import IT6 from '../assets/IT7.png'
// import IT7 from '../assets/IT8.png'
// import IT8 from '../assets/IT9.png'
// import IT9 from '../assets/IT10.png'
// import IT10 from '../assets/IT11.png'

// import PM from '../assets/pm1.png'
// import PM1 from '../assets/pm2.png'
// import PM2 from '../assets/pm3.png'
// import PM3 from '../assets/pm4.png'

// import Risk from '../assets/risk1.png'
// import Risk1 from '../assets/risk2.png'
// import Risk2 from '../assets/risk3.png'
// import Risk3 from '../assets/risk4.png'
// import Risk4 from '../assets/risk5.png'


function Business() {
  return (
    <>
    <div className=''>
      <Container>
        <Row>
          <Col md={12}></Col>
        </Row>
                   <img src={business} className="img-fluid" alt="" />
                   <img src={business1} className="img-fluid" alt="" />
                   <img src={business2} className="img-fluid" alt="" />
                   <img src={business3} className="img-fluid" alt="" />
                   <img src={business4} className="img-fluid" alt="" />
                   <img src={business5} className="img-fluid" alt="" />
                   <img src={business6} className="img-fluid" alt="" />
                   <img src={business7} className="img-fluid" alt="" />
                   <img src={business8} className="img-fluid" alt="" />
      </Container>
    </div>
    </>
  )
}

export default Business
 