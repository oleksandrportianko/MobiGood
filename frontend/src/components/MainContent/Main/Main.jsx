import React from 'react'
import './Main.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import mainPhones from '../../../assets/img/main-phones.png'
import { Link } from 'react-router-dom'

const Main = () => {
   return (
      <Container fluid className="p-0 m-0">
         <Row className="m-0 d-flex flex-row">
            <Col className="p-0 mx-3 my-5 mx-sm-0 my-sm-0 ms-sm-4 d-flex flex-column justify-content-center" >
               <p className="main-title">ТЕЛЕФОНИ І АКСЕСУАРИ ДЛЯ ВАС</p>
               <p className="main-title-discription">Купуйте вигідно, телефони і аксесуари тільки
                  у нас, великий вибір та хороші ціни</p>
               <Link className="text-decoration-none d-flex" to="/phones"><button className="main-button">Перейти до товарів</button></Link>
            </Col>
            <Col className="p-0 m-0 d-none d-sm-flex">
               <Image className="main-image-phone" height="700px" width="670px" src={mainPhones} />
            </Col>
         </Row>
      </Container>
   )
}

export default Main
