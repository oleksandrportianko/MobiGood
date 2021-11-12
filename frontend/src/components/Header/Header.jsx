import React, { useEffect, useState } from 'react'
import './Header.css'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import profile from '../../assets/img/profile.png'
import logo from '../../assets/img/logo.svg'
import logoText from '../../assets/img/logo-text.svg'
import login from '../../assets/img/login.png'
import cart from '../../assets/img/cart.png'
import { Link, NavLink } from 'react-router-dom'
import HeaderBurger from './HeaderBurger/HeaderBurger'
import CartModal from './CartModal/CartModal'
import LoginModal from './LoginModal/LoginModal'
import RegistrationModal from './RegistraionModal/RegistrationModal'

const Header = (props) => {
   useEffect(() => {
      props.getUserInfo();
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   let setLogoutUser = () => {
      props.logoutUser()
   }

   const [showCart, setShowCart] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [showRegistration, setShowRegistration] = useState(false);
   return (
      <Container fluid className="p-0 m-0 ms-md-2">
         <Row className="d-flex p-0 m-0">
            <Col sm="auto" md={3} lg={2} xl={2} className="header-logo-container d-none me-md-3 me-lg-5 me-xl-4 p-0 m-0 d-sm-flex align-items-center">
               <Link to="/">
                  <Image className="header-logo" src={logo} />
               </Link>
               <Col className="header-name-company d-none d-md-flex flex-column" >
                  <Link to="/">
                     <Image width="162px" className="header-text-img" src={logoText} />
                  </Link>
                  <p className="border-under-img"></p>
               </Col>
            </Col>
            <HeaderBurger logoutUser={props.logoutUser} isAuth={props.isAuth} login={props.login} headerItems={props.headerItems} setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} />
            <Col sm="auto" md={3} lg={4} xl={4} className="header-navigation-container d-none d-sm-flex me-sm-4 me-md-0 me-xl-5 p-0 m-0">
               <Nav className="ml-3">
                  <NavLink className="header-nav-link text-decoration-none text-dark" activeClassName="header-nav-active" to="/phones"><Nav.Item className="header-nav-item">Телефони</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/accessories"><Nav.Item className="header-nav-item">Аксесуари</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/forauto"><Nav.Item className="header-nav-item">Для авто</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/aboutus"><Nav.Item className="header-nav-item">Про нас</Nav.Item></NavLink>
               </Nav>
            </Col>
            <Col sm="auto" md={2} lg={2} xl={2} className="header-number-container d-none me-sm-4 me-md-0 p-0 d-sm-flex align-items-center">
               <p className="header-phone-number m-0 fw-bold">(066)-090-36-80</p>
            </Col>
            <Col xs={6} sm="auto" md={1} lg={1} xl={1} className="header-cart-container d-flex justify-content-end pe-1 p-0 me-sm-4 me-md-0 p-sm-0 p-md-3 me-lg-0 me-xl-0 d-flex align-items-center">
               <button onClick={() => setShowCart(true)} className="position-relative p-0 border-0 bg-transparent">
                  {props.countItemsCart !== 0 ?
                     <div className="header-cart-circle position-absolute">{props.countItemsCart}</div>
                     : ""}
                  <Image width="32px" height="32px" className="header-cart-image" src={cart} />
               </button>
            </Col>
            <CartModal
               show={showCart}
               onHide={() => setShowCart(false)}
               countItemsCart={props.countItemsCart}
            />
            {props.isAuth
               ? <Col sm="auto" md={2} lg={2} xl={2} className="header-user-name d-none d-sm-flex p-sm-0 p-md-0 align-items-center justify-content-end">
                  <Link className="header-profile-none d-flex flex-row align-items-center border border-0" to="/profile">
                     <p className="m-0 me-2"><Image src={profile} width="28px" height="28px"></Image></p>
                     <p className="header-name-user m-0 me-2">{props.login}</p>
                  </Link>
               </Col>
               : <Col sm="auto" md={1} lg={1} xl="auto" className="d-none d-sm-flex p-sm-0 p-md-3 align-items-center">
                  <Image width="32px" height="32px" className="header-login-image" src={login} />
                  <button onClick={() => setShowLogin(true)} className="header-button-login bg-transparent text-black">Вхід</button>
                  <button onClick={() => setShowRegistration(true)} className="header-button-regitration bg-transparent text-black">Реєстрація</button>
               </Col>
            }
            <LoginModal
               show={showLogin}
               onHide={() => setShowLogin(false)}
               setShowRegistration={() => setShowRegistration(true)}
               loginUser={props.loginUser}
               getUserInfo={props.getUserInfo}
            />
            <RegistrationModal
               show={showRegistration}
               onHide={() => setShowRegistration(false)}
               setShowLogin={setShowLogin}
               registrationUser={props.registrationUser}
               getUserInfo={props.getUserInfo}
            />
         </Row>
      </Container >
   )
}

export default Header