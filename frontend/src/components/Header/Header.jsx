import React from 'react'
import './Header.css'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import logoText from '../../assets/img/logo-text.svg'
import login from '../../assets/img/login.png'
import cart from '../../assets/img/cart.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
   return (
      <Container fluid className="p-0 m-0 ms-2">
         <Row className="d-flex p-0 m-0">
            <Col md={3} lg={2} xl={2} className="header-logo-container me-md-3 me-lg-5 me-xl-4 p-0 m-0 d-flex align-items-center">
               <Link to="/">
                  <Image className="header-logo" src={logo} />
               </Link>
               <Col className="header-name-company d-flex flex-column" >
                  <Link to="/">
                     <Image width="162px" className="header-text-img" src={logoText} />
                  </Link>
                  <p className="border-under-img"></p>
               </Col>
            </Col>
            <Col md={3} lg={4} xl={4} className="header-navigation-container me-xl-5 p-0 m-0">
               <Nav className="ml-3">
                  <NavLink className="header-nav-link text-decoration-none text-dark" activeClassName="header-nav-active" to="/phones"><Nav.Item className="header-nav-item">Телефони</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/accessories"><Nav.Item className="header-nav-item">Аксесуари</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/forauto"><Nav.Item className="header-nav-item">Для авто</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/aboutus"><Nav.Item className="header-nav-item">Про нас</Nav.Item></NavLink>
               </Nav>
            </Col>
            <Col md={2} lg={2} xl={2} className="header-number-container p-0 d-flex align-items-center">
               <p className="header-phone-number m-0 fw-bold">(066)-090-36-80</p>
            </Col>
            <Col md={1} lg={1} xl={1} className="header-cart-container me-lg-0 me-xl-0 d-flex align-items-center">
               <Link to="/cart">
                  <Image width="32px" height="32px" className="" src={cart} />
               </Link>
               <Link className="text-decoration-none" to="/cart">
                  <div className="header-cart-circle">11</div>
               </Link>
            </Col>
            <Col md={1} lg={1} xl="auto" className="d-flex align-items-center">
               <Image width="32px" height="32px" src={login} />
               <button className="header-button-login bg-transparent text-black">Вхід</button>
               <button className="header-button-regitration bg-transparent text-black">Реєстрація</button>
            </Col>
         </Row>
      </Container>
   )
}

export default Header
