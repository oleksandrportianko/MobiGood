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
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '../../redux/Reducers/authReducer'

const Header = (props) => {
   const [showCart, setShowCart] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [showRegistration, setShowRegistration] = useState(false);
   const isAuth = useSelector((state) => state.auth.isAuth)
   const dispatch = useDispatch()
   const cartCount = useSelector((state) => state.auth.cart?.total_products)

   useEffect(() => {
      dispatch(getUserInfo())
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <Container fluid className="p-0 m-0 ps-md-2">
         <Row className="d-flex flex-row justify-content-around p-1 p-md-0 m-0">
            <Col xs={1} sm="auto" className="header-logo-container d-none p-0 m-0 d-sm-flex align-items-center">
               <Link to="/">
                  <Image className="header-logo" src={logo} />
               </Link>
               <Col className="header-name-company d-none d-sm-flex flex-column" >
                  <Link to="/">
                     <Image width="162px" className="header-text-img" src={logoText} />
                  </Link>
                  <p className="border-under-img"></p>
               </Col>
            </Col>
            <HeaderBurger logoutUser={props.logoutUser} isAuth={isAuth} login={props.login} headerItems={props.headerItems} setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} />
            <Col xs={4} sm={6} md="auto" lg={4} className="header-navigation-container justify-content-sm-center d-none d-sm-flex p-0 m-0">
               <Nav className="ml-3">
                  <NavLink className="header-nav-link text-decoration-none text-dark" activeClassName="header-nav-active" to="/phones"><Nav.Item className="header-nav-item">Телефони</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/accessories"><Nav.Item className="header-nav-item">Аксесуари</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/forauto"><Nav.Item className="header-nav-item">Для авто</Nav.Item></NavLink>
                  <NavLink className="text-decoration-none text-dark" activeClassName="header-nav-active" to="/aboutus"><Nav.Item className="header-nav-item">Про нас</Nav.Item></NavLink>
               </Nav>
            </Col>
            <Col sm="auto" className="header-number-container d-none p-0 ms-md-3 ms-lg-4 me-lg-4 d-md-flex align-items-center justify-content-center">
               <p className="header-phone-number m-0 fw-bold">(066)-090-36-80</p>
            </Col>
            <Col className="header-cart-container p-0 ms-sm-0 ms-lg-2 d-flex justify-content-end justify-content-sm-center d-flex align-items-center">
               <button onClick={() => setShowCart(true)} className="position-relative p-0 border-0 bg-transparent">
                  {cartCount >= 1 ?
                     <div className="header-cart-circle position-absolute">{cartCount}</div>
                     : ""}
                  <Image width="32px" height="32px" className="header-cart-image" src={cart} />
               </button>
            </Col>
            <CartModal
               show={showCart}
               onHide={() => setShowCart(false)}
            />
            {isAuth
               ? <Col className="header-user-name p-0 pe-2 d-none d-sm-flex align-items-center justify-content-end">
                  <Link to="/profile" className="header-profile-profile-link d-flex flex-row align-items-center">
                     <p className="m-0 me-2"><Image className="header-user-image" src={profile} width="28px" height="28px" /></p>
                     <p className="header-name-user m-0 me-0 me-md-2">Профіль</p>
                  </Link>
               </Col>
               : <Col className="d-none d-sm-flex align-items-center justify-content-end">
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