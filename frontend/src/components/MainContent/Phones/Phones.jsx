import React, { useEffect, useState } from 'react'
import './Phones.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPhones } from '../../../redux/Reducers/phonesReducer'
import { Col, Container, Image, Row } from 'react-bootstrap'
import shoppingCart from '../../../assets/img/shopping-cart.png'
import heart from '../../../assets/img/heart.png'
import redHeart from '../../../assets/img/red_heart.png'
import { setCartPhones } from '../../../redux/Reducers/authReducer'
import { addToLikedItem, getLikedItemThunk, removeLikedItem } from '../../../redux/Reducers/likedProductReducer'
import { Link } from 'react-router-dom'
import { contains } from '../../Common/ContainFunction'

const Phones = () => {
   const cartItems = useSelector((state) => state.auth.cart.products);
   const phonesData = useSelector((state) => state.phones.phonesData);
   const likedItems = useSelector((state) => state.liked.likedItems);
   const isAuth = useSelector((state) => state.auth.isAuth);
   const dispatch = useDispatch()
   const [focus, setFocus] = useState([])

   const arrayLikedItems = [];
   const arrayCartItems = [];

   if (likedItems) {
      let mapedLikedItems = likedItems.forEach((item) => arrayLikedItems.push(item.id));
   }

   if (cartItems) {
      let mapedCartItems = cartItems.forEach((item) => arrayCartItems.push(item.id));
   }

   const setFocusActive = (id) => {
      setFocus([id])
   }

   const setBlurActive = (id) => {
      setFocus([])
   }

   const addPhoneCart = (id) => {
      dispatch(setCartPhones(id))
   }

   const addToLiked = (id) => {
      dispatch(addToLikedItem(id))
   }

   const removeFromLiked = (id) => {
      dispatch(removeLikedItem(id))
   }

   useEffect(() => {
      dispatch(getPhones())
      dispatch(getLikedItemThunk())
   }, [dispatch])

   return (
      <Container fluid className="phones-container border mt-4 mb-4 p-0">
         <Row className="phones-row-colums pt-4 pb-4 d-flex justify-content-center">
            {phonesData && phonesData.map((el) => {
               return (
                  <Col onMouseEnter={() => setFocusActive(el.id)} onMouseLeave={() => setBlurActive(el.id)}
                     className={focus[0] === el.id ? "phones-phone-active-container" : "phones-phone-container"} xs={2} key={el.id}>
                        <Col className="mt-3 d-flex justify-content-center">
                           { isAuth ?
                              <Image onClick={contains(arrayLikedItems, el.id) ? () => removeFromLiked(el.id) : () => addToLiked(el.id)} className="phones-like-image" width="20px" height="20px" src={contains(arrayLikedItems, el.id) ? redHeart : heart} />
                              : ''
                           }
                           <Image className="me-3" width="180px" height="160px" src={el.image} />
                        </Col>
                     <Col className="phones-phone-title mt-1 d-flex justify-content-center text-center">
                        <Link className='phones-phone-title' to={'phone/' + el.id}>
                           ?????????????????? ?????????????? {el.title} {el.product_color} {el.memory}
                        </Link>
                     </Col>
                     <Col className="phones-phone-prise mt-2 d-flex justify-content-between align-items-center">
                        {el.price + '???'}
                        { contains(arrayCartItems, el.id) ? 
                           <div className='phones-added-in-cart'>?? ??????????????</div>
                        : <button onClick={() => addPhoneCart(el.id)} className="phones-img-add-to-card-button">
                           <Image className="me-1" width="32px" height="32px" src={shoppingCart} />
                        </button>
                        }
                     </Col>
                     {focus[0] === el.id &&
                        <Col className="phones-active-descriptions mt-2">
                           <Col>
                              ?????????? ({el.display}) / {el.soc} / ?????????????? ???????????? ({el.main_cam_mp}) / ???????????????????? ???????????? ({el.frontal_cam_mp}) / RAM ({el.memory}) / {el.battery}
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
