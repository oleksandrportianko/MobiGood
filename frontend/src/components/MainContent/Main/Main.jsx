import React from 'react'
import './Main.css'
import { Container, Image } from 'react-bootstrap'
import mainPhones from '../../../assets/img/main-phones.png'
import { Link } from 'react-router-dom'

const Main = () => {
   return (
      <Container className="p-0 m-0 d-flex justify-content-end w-100">
         <Container className="ms-4 d-flex flex-column justify-content-center align-items-start" >
            <p className="main-title">ТЕЛЕФОНИ І АКСЕСУАРИ ДЛЯ ВАС</p>
            <p className="main-title-discription">Купуйте вигідно, телефони і аксесуари тільки
               у нас, великий вибір та хороші ціни</p>
            <Link className="text-decoration-none" to="/phones"><button className="main-button">Перейти до товарів</button></Link>
         </Container>
         <Image className="main-image-phone" height="700px" width="670px" src={mainPhones} />
      </Container>
   )
}

export default Main
