import React, { useState } from 'react'
import { Col, Container, Image, Modal, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import profile from '../../../assets/img/aboutus.png'
import file from '../../../assets/img/file.png'
import heart from '../../../assets/img/heart.png'
import bonuse from '../../../assets/img/bonuse.png'
import order from '../../../assets/img/order.png'
import PersonalData from './PersonalData/PersonalData'
import MyOrders from './MyOrders'
import SelectedProducts from './SelectedProducts'
import MyBonuse from './MyBonuse'
import logout from '../../../assets/img/logout.png'
import { logoutUser } from '../../../redux/Reducers/authReducer'
import { useHistory } from 'react-router';

const Profile = () => {
   const email = useSelector((state) => state.auth.email)
   const firstName = useSelector((state) => state.auth.firstName)
   const lastName = useSelector((state) => state.auth.lastName)

   const dispatch = useDispatch()
   const history = useHistory()

   const [showModalLogout, setShowModalLogout] = useState(false);
   const [personalDataActive, setPersonalDataActive] = useState(true)
   const [myOrdersActive, setMyOrdersActive] = useState(false)
   const [selectedProductsActive, setSelectedProductActive] = useState(false)
   const [myBonuseActive, setMyBonuseActive] = useState(false)
   const [title, setTitle] = useState('Особисті дані')

   const handleCloseLogoutModal = () => setShowModalLogout(false);
   const handleShowLogoutModal = () => setShowModalLogout(true);

   const setActivePersonalData = () => {
      setPersonalDataActive(true)
      setMyOrdersActive(false)
      setSelectedProductActive(false)
      setMyBonuseActive(false)
      setTitle('Особисті дані')
   }

   const setActiveMyOrders = () => {
      setPersonalDataActive(false)
      setMyOrdersActive(true)
      setSelectedProductActive(false)
      setMyBonuseActive(false)
      setTitle('Мої замовлення')
   }

   const setActiveSelectedProducts = () => {
      setPersonalDataActive(false)
      setMyOrdersActive(false)
      setSelectedProductActive(true)
      setMyBonuseActive(false)
      setTitle('Вибрані товари')
   }

   const setActiveMyBonuse = () => {
      setPersonalDataActive(false)
      setMyOrdersActive(false)
      setSelectedProductActive(false)
      setMyBonuseActive(true)
      setTitle('Мої бонуси')
   }

   const setLogoutUser = async () => {
      dispatch(logoutUser());
      history.push('/')
   }

   return (
      <Container className="profile-container border" fluid>
         <Row>
            <Col xs={4} className="border-end">
               <Row className="p-2 m-0">
                  <Col xs={2} className="d-none d-sm-flex p-0 ms-2 ms-sm-0 align-items-center justify-content-end">
                     <Image width="40px" height="40px" src={profile} />
                  </Col>
                  <Col className="p-0 p-sm-2" xs={12} sm={10}>
                     <div className="profile-title-name">{firstName} {lastName}</div>
                     <div className="profile-title-email">{email}</div>
                  </Col>
               </Row>
            </Col>
            <Col xs={8} className="d-flex align-items-center">
               <p className="profile-content-title m-0 ms-2">{title}</p>
            </Col>
         </Row>
         <Row>
            <Col xs={4} className="p-0 border border-start-0 border-bottom-0">
               <ul className="profile-nav-list p-0 m-0">
                  <li onClick={setActivePersonalData} className={personalDataActive ? "active-nav-item d-flex flex-row align-items-center" : "d-flex flex-row align-items-center"}>
                     <div className="profile-nav-image d-flex align-items-center justify-content-center">
                        <Image width="32px" height="32px" src={file} />
                     </div>
                     <p className="profile-nav-text m-0">Особисті дані</p>
                  </li>
                  <li onClick={setActiveMyOrders} className={myOrdersActive ? "active-nav-item d-flex flex-row align-items-center" : "d-flex flex-row align-items-center"}>
                     <div className="profile-nav-image d-flex align-items-center justify-content-center">
                        <Image width="32px" height="32px" src={order} />
                     </div>
                     <p className="profile-nav-text m-0">Мої замовлення</p>
                  </li>
                  <li onClick={setActiveSelectedProducts} className={selectedProductsActive ? "active-nav-item d-flex flex-row align-items-center" : "d-flex flex-row align-items-center"}>
                     <div className="profile-nav-image d-flex align-items-center justify-content-center">
                        <Image width="32px" height="32px" src={heart} />
                     </div>
                     <p className="profile-nav-text m-0">Вибрані товари</p>
                  </li>
                  <li onClick={setActiveMyBonuse} className={myBonuseActive ? "active-nav-item d-flex flex-row align-items-center" : "d-flex flex-row align-items-center"}>
                     <div className="profile-nav-image d-flex align-items-center justify-content-center">
                        <Image width="32px" height="32px" src={bonuse} />
                     </div>
                     <p className="profile-nav-text m-0">Мої бонуси</p>
                  </li>
                  <li onClick={handleShowLogoutModal} className="d-flex flex-row align-items-center">
                     <div className="profile-nav-image d-flex align-items-center justify-content-center">
                        <Image className="ms-2" width="32px" height="32px" src={logout} />
                     </div>
                     <p className="profile-nav-text m-0">Вийти</p>
                  </li>
               </ul>
            </Col>
            <Col xs={8}>
               {personalDataActive && <PersonalData />}
               {myOrdersActive && <MyOrders />}
               {selectedProductsActive && <SelectedProducts />}
               {myBonuseActive && <MyBonuse />}
            </Col>
            <Modal size="sm" show={showModalLogout} centered onHide={handleCloseLogoutModal}>
               <Modal.Body>
                  <div className="mb-3"> Ви дійсно хочете вийти? </div>
                  <Button style={{ width: 120 }} size="md" className="me-2" variant="dark" onClick={setLogoutUser}>
                     Вийти
                  </Button>
                  <Button style={{ width: 120, background: '#FF0000' }} size="md" variant="danger" onClick={handleCloseLogoutModal}>
                     Відміна
                  </Button>
               </Modal.Body>
            </Modal>
         </Row>
      </Container>
   )
}

export default Profile