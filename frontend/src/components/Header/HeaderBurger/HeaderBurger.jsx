import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './HeaderBurger.css'
import logo from '../../../assets/img/logo.svg'
import logoText from '../../../assets/img/logo-text.svg'
import login from '../../../assets/img/login.png'
import menu from '../../../assets/img/menu.png'
import close from '../../../assets/img/close.png'
import { withCookies } from 'react-cookie'
import profile from '../../../assets/img/profile.png'

const HeaderBurger = (props) => {
   const [activeBurger, setActiveBurger] = useState(false);

   useEffect(() => {
      setActiveBurger(false)
   }, [props.isAuth])

   const handleShow = () => {
      setActiveBurger(true)
   }

   const handleClose = () => {
      setActiveBurger(false)
   }

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
                  {props.isAuth
                     ? <Col className="header-user-name mt-2 mb-2 d-flex align-items-center ms-3">
                        <Link to="/profile" className="header-burger-profile-link d-flex flex-row align-items-center">
                           <p className="m-0 me-2"><Image src={profile} width="32px" height="32px" /></p>
                           <p className="header-name-user m-0 me-2">Профіль</p>
                        </Link>
                     </Col>
                     : <Col className="d-flex align-items-center pt-1">
                        <Image width="32px" height="32px" className="header-login-image" src={login} />
                        <button onClick={() => props.setShowLogin(true)} className="header-burger-button-login bg-transparent text-black">Вхід</button>
                        <button onClick={() => props.setShowRegistration(true)} className="header-burger-button-regitration bg-transparent text-black">Реєстрація</button>
                     </Col>}
               </Offcanvas.Body>
            </Offcanvas>
         </Container>
      </Col >
   )
}

export default withCookies(HeaderBurger)
