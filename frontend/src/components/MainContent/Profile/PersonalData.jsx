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
               <div>Батькович</div>
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
               <div>номерок</div>
            </Col>
         </Row>
         <Row>
            <Col>
               <button className="personal-data-edit-button">Редагувати дані</button>
            </Col>
         </Row>
         <Row>
            <Col className="p-0">
               <p className="personal-data-change-password-title m-0 mt-3 mb-3">Зміна пароля</p>
            </Col>
         </Row>
         <Row>
            <Col className="mb-2">
               <p className="rersonal-data-label m-0">Старий пароль</p>
               <input type="password" className="personal-data-password-change-input" />
            </Col>
         </Row>
         <Row>
            <Col className="mb-2">
               <p className="rersonal-data-label m-0">Новий пароль</p>
               <input type="password" className="personal-data-password-change-input" />
            </Col>
         </Row>
         <Row>
            <Col className="mb-4">
               <p className="rersonal-data-label m-0">Повторіть пароль</p>
               <input type="password" className="personal-data-password-change-input" />
            </Col>
         </Row>
         <Row className="mb-2">
            <Col className="mb-1">
               <button className="personal-data-edit-button">Змінити пароль</button>
            </Col>
         </Row>
      </Container>
   )
}

export default PersonalData
