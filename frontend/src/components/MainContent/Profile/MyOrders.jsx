import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import emptyCart from '../../../assets/img/empty-cart.png'

const MyOrders = () => {
   return (
      <Container>
         <Row className="mt-5 mb-5">
            <Col className="profile-my-order d-flex flex-column align-items-center justify-content-center">
               <Image className="myorders-image-none-order" width="300px" height="300px" src={emptyCart} />
               <p className="m-0 text-center">У вас поки немає ніяких замовлень</p>
            </Col>
         </Row>
      </Container>
   )
}

export default MyOrders
