import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCurrentPhone } from '../../../redux/Reducers/phonesReducer'
import { contains } from '../../Common/ContainFunction'
import shoppingCart from '../../../assets/img/shopping-cart.png'
import { setCartPhones } from '../../../redux/Reducers/authReducer'
import { addToLikedItem, removeLikedItem } from '../../../redux/Reducers/likedProductReducer'
import heart from '../../../assets/img/heart.png'
import redHeart from '../../../assets/img/red_heart.png'

const PhonePage = () => {   
   const cartItems = useSelector((state) => state.auth.cart.products);
   const likedItems = useSelector((state) => state.liked.likedItems);
   const currentPhoneData = useSelector((state) => state.phones.currentPhone)
   const isAuth = useSelector((state) => state.auth.isAuth)
   const dispatch = useDispatch()
   let { phoneId } = useParams()

   console.log(currentPhoneData)
   let colorsObj = []

   const arrayLikedItems = [];
   const arrayCartItems = [];

   if (likedItems) {
      let mapedLikedItems = likedItems.forEach((item) => arrayLikedItems.push(item.id));
   }

   if (cartItems) {
      let mapedCartItems = cartItems.forEach((item) => arrayCartItems.push(item.id));
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

   if (currentPhoneData) {
      let id = '';

      let newRelatedModels = currentPhoneData.related_models.replaceAll(',', '').replaceAll('<', '').replaceAll('>', '').split(' ').filter((el) => el.length >= 1);
      
      for (let i = 0; i < newRelatedModels.length; i++) {
         if (i%2 === 0) {
            id = parseInt(newRelatedModels[i])
         }
         else if (i%2 !== 0) {
            let value = newRelatedModels[i]
            colorsObj.push({'id': id, 'value': value})
         }
      }
   }

   useEffect(() => {
      dispatch(getCurrentPhone(phoneId))
   },[dispatch, phoneId])

  return (
    <div className='phone-container'>
       <div className='phone-header'>Мобільний телефон {currentPhoneData.title} {currentPhoneData.product_color} {currentPhoneData.memory} Офіційна гарантія {currentPhoneData.warranty}</div>
       <div className='phone-main-info'>
          <img className='phone-main-info-image' src={'http://localhost:8000' + currentPhoneData.image} alt="" />
          <div className='phone-main-info-details'>
            <div className='phone-main-info-colors'>
               <p className='p-0 m-0'>Всі кольори</p>
               <div className='phone-colors-list'>
                  {colorsObj.map((el) => <div className='phone-colors-items' key={el.id}>
                     <Link className='phone-color-link' to={'/phone/' + el.id}><div className="phones-color-input" style={{ backgroundColor: el.value }} /></Link>
                  </div> )}
               </div>
               <div className='phone-block-price'>
                  <p className='phone-price m-0'>
                     {currentPhoneData.price + '₴'}
                  </p>
                  <div>
                     { contains(arrayCartItems, phoneId) ? 
                        <div className='phones-added-in-cart'>В корзині</div>
                        : <button onClick={() => addPhoneCart(phoneId)} className="phones-add-to-cart-in-phone-page">
                           <Image className="me-1" width="32px" height="32px" src={shoppingCart} />
                           <p className='m-0'>Додати в корзину</p>
                        </button>
                     }
                  </div>
                  <div>
                     {isAuth ? 
                        <Image onClick={contains(arrayLikedItems, phoneId) ? () => removeFromLiked(phoneId) : () => addToLiked(phoneId)} className="phones-like-image" width="20px" height="20px" src={contains(arrayLikedItems, phoneId) ? redHeart : heart} />
                        : ""   
                     }
                  </div>
               </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default PhonePage