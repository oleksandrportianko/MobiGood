import React, { useState } from 'react'
import { Col, Container, Image, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './HeaderBurger.css'

import logo from '../../../assets/img/logo.svg'
import logoText from '../../../assets/img/logo-text.svg'
import login from '../../../assets/img/login.png'
import menu from '../../../assets/img/menu.png'
import close from '../../../assets/img/close.png'

const HeaderBurger = (props) => {
   const [activeBurger, setActiveBurger] = useState(false);

   let menuItemsList = props.headerItems.map((m) => {
      return (
         <NavLink key={m.id} className="text-decoration-none text-dark" activeClassName="header-burger-nav-active" to={m.url}>
            <Nav.Item className="header-burger-nav-item text-black d-flex align-items-center">
               <Image className="me-1" width="28px" height="28px" src={m.image}></Image>
               <p className="m-0"> {m.name} </p>
            </Nav.Item>
         </NavLink>
      )
   })

   const handleShow = () => {
      setActiveBurger(true)
      console.log(activeBurger)
   }

   const handleClose = () => {
      setActiveBurger(false)
      console.log(activeBurger)
   }

   return (
      <Col xs={6} className="d-sm-none p-0 d-flex">
         <Container className="p-0">
            <Navbar.Brand className="m-0">
               <Link to="/">
                  <Image className="header-logo" src={logo} />
               </Link>
               <Image className="header-button-burger ms-2 p-1" onClick={handleShow} width="38px" height="38px" src={menu} />
            </Navbar.Brand>
            <Offcanvas
               onHide={handleClose}
               show={activeBurger}>
               <Offcanvas.Header className="p-0 border-bottom">
                  <Container fluid className="p-0">
                     <Row className="m-0">
                        <Col xs={6} className="header-logo-container p-0 m-0 mb-1 d-flex align-items-center">
                           <Col className="p-0">
                              <Link to="/">
                                 <Image className="header-logo" src={logo} />
                              </Link>
                           </Col>
                           <Col className="header-name-company d-flex p-0" >
                              <Link to="/">
                                 <Image width="162px" src={logoText} />
                              </Link>
                           </Col>
                        </Col>
                        <Col xs={6} className="d-flex align-items-center p-0 mb-1 pe-1">
                           <Col className="p-0 d-flex justify-content-end">
                              <Image src={close} onClick={handleClose} width="18px" height="18px" />
                           </Col>
                        </Col>
                     </Row>
                  </Container>
               </Offcanvas.Header>
               <Offcanvas.Body className="header-burger-menu-body p-0 ">
                  <Nav className="py-2 px-3 border-bottom d-flex flex-column">
                     {menuItemsList}
                  </Nav>
                  <Col className="d-flex align-items-center pt-1">
                     <Image width="32px" height="32px" className="header-login-image" src={login} />
                     <button className="header-burger-button-login bg-transparent text-black">Вхід</button>
                     <button className="header-burger-button-regitration bg-transparent text-black">Реєстрація</button>
                  </Col>
               </Offcanvas.Body>
            </Offcanvas>
         </Container>
      </Col >
   )
}

export default HeaderBurger
