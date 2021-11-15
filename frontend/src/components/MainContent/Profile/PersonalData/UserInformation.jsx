import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const UserInformation = (props) => {
   const email = useSelector((state) => state.auth.email)
   const firstName = useSelector((state) => state.auth.firstName)
   const lastName = useSelector((state) => state.auth.lastName)
   const login = useSelector((state) => state.auth.login)
   const phone = useSelector((state) => state.auth.phone)
   const fatherName = useSelector((state) => state.auth.fatherName)

   return (
      <div>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">Логін</p>
               <div>{login ? login : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">Ім'я</p>
               <div>{firstName ? firstName : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">Прізвище</p>
               <div>{lastName ? lastName : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">По батькові</p>
               <div>{fatherName ? fatherName : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">Електронна пошта</p>
               <div>{email ? email : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col className="mb-3">
               <p className="rersonal-data-label m-0">Номер телефону</p>
               <div>{phone ? phone : "немає"}</div>
            </Col>
         </Row>
         <Row>
            <Col>
               <button onClick={() => props.setEditModeData(true)} className="personal-data-edit-button">Редагувати дані</button>
            </Col>
         </Row>
         <Row></Row>
      </div>
   )
}

export default UserInformation
