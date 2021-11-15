import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ChangePassword = () => {
   return (
      <div>
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
      </div>
   )
}

export default ChangePassword
