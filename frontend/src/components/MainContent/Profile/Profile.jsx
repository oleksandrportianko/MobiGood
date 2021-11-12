import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Profile = () => {

   let email = useSelector((state) => state.auth.email)
   let firstName = useSelector((state) => state.auth.firstName)
   let lastName = useSelector((state) => state.auth.lastName)

   return (
      <Container fluid>
         <Row>
            <Col>
               <div>{firstName} {lastName}</div>
               <div>{email}</div>
            </Col>
            <Col>Особисті дані</Col>
         </Row>
         <Row>
            <Col>
               <ul>
                  <li>Особисті дані</li>
                  <li>Мої замовлення</li>
                  <li>Вибрані товари</li>
                  <li>Умови повернення і доставки</li>
                  <li>Про нас</li>
               </ul>
            </Col>
            <Col>Data</Col>
         </Row>
      </Container>
   )
}

export default Profile
