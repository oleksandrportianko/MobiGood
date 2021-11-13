import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const PersonalData = () => {

   const email = useSelector((state) => state.auth.email)
   const firstName = useSelector((state) => state.auth.firstName)
   const lastName = useSelector((state) => state.auth.lastName)
   const login = useSelector((state) => state.auth.login)

   return (
      <Container>
         <Row>
            <Col>
               <p className="m-0">Логін</p>
               <div>{login}</div>
            </Col>
         </Row>
         <Row>
            <Col>
               <p className="m-0">Ім'я</p>
               <div>{firstName}</div>
            </Col>
         </Row>
         <Row>
            <Col>
               <p className="m-0">Прізвище</p>
               <div>{lastName}</div>
            </Col>
         </Row>
         <Row>
            <Col>
               <p className="m-0">Електронна пошта</p>
               <div>{email}</div>
            </Col>
         </Row>
         <Row>
            <Col>5</Col>
         </Row>
      </Container>
   )
}

export default PersonalData
