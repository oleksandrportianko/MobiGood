import React, { useEffect, useState } from 'react'
import './Phones.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPhones } from '../../../redux/Reducers/phonesReducer'
import { Col, Container, Image, Row } from 'react-bootstrap'
import shoppingCart from '../../../assets/img/shopping-cart.png'
import heart from '../../../assets/img/heart.png'
import redHeart from '../../../assets/img/heart-red.svg'

const Phones = () => {
   const phonesData = useSelector((state) => state.phones.phonesData)
   const dispatch = useDispatch()
   const [focus, setFocus] = useState([])

   const setFocusActive = (id) => {
      setFocus([id])
   }

   const setBlurActive = (id) => {
      setFocus([])
   }

   useEffect(() => {
      dispatch(getPhones())
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <Container fluid className="phones-container border mt-4 mb-4 p-0">
         <Row className="phones-row-colums pt-4 pb-4 d-flex justify-content-center">
            {phonesData && phonesData.map((el) => {
               return (
                  <Col onMouseEnter={() => setFocusActive(el.id)} onMouseLeave={() => setBlurActive(el.id)}
                     className={focus[0] === el.id ? "phones-phone-active-container" : "phones-phone-container"} xs={2} key={el.id}>
                     <Col className="mt-3 d-flex justify-content-center">
                        <Image className="phones-like-image" width="20px" height="20px" src={heart} />
                        <Image className="me-3" width="180px" height="160px" src={el.image1} />
                     </Col>
                     <Col className="mt-1 mb-2 d-flex justify-content-center">
                        {el.color1 && <span className="phones-color-input" style={{ backgroundColor: el.color1 }} />}
                        {el.color2 && <span className="phones-color-input" style={{ backgroundColor: el.color2 }} />}
                        {el.color3 && <span className="phones-color-input" style={{ backgroundColor: el.color3 }} />}
                        {el.color4 && <span className="phones-color-input" style={{ backgroundColor: el.color4 }} />}
                        {el.color5 && <span className="phones-color-input" style={{ backgroundColor: el.color5 }} />}
                        {el.color6 && <span className="phones-color-input" style={{ backgroundColor: el.color6 }} />}
                     </Col>
                     <Col className="phones-phone-title mt-1 d-flex justify-content-center">
                        {el.slug} {el.title}
                     </Col>
                     <Col className="phones-phone-prise mt-2 d-flex justify-content-between align-items-center">
                        {el.price + '₴'}
                        <button className="phones-img-add-to-card-button">
                           <Image className="me-1" width="32px" height="32px" src={shoppingCart} />
                        </button>
                     </Col>
                     {focus[0] === el.id &&
                        <Col className="phones-active-descriptions mt-2">
                           <Col>
                              Екран ({el.display}) / {el.soc} / Основана камера ({el.main_cam_mp}) / Фронтальна камера ({el.frontal_cam_mp}) / RAM ({el.memory}) / {el.battery}
                           </Col>
                        </Col>
                     }
                  </Col>
               )
            })}
         </Row>
      </Container >
   )
}

export default Phones
