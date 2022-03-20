import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getLikedItemThunk, removeLikedItem } from '../../../redux/Reducers/likedProductReducer'

const SelectedProducts = () => {
   const dispatch = useDispatch();
   const likedItems = useSelector((state) => state.liked.likedItems)

   const deleteFromLiked = (id) => {
      dispatch(removeLikedItem(id))
   }

   useEffect(() => {
      dispatch(getLikedItemThunk())
   }, [dispatch])

   return (
      <div className='selected-products-container'>
         {
            likedItems.length < 1 ? 
            <div className='selected-products-noselected'>У вас поки немає обраних, <Link className='selected-products-link' to="/phones"> перейти до товарів</Link></div>
            : likedItems.map((el, idx) => (
               <div key={el.id} className="selected-products-wrapper">
                  <div className='d-flex align-items-center'>
                     <span className='selected-products-id' >{idx + 1}</span>
                     <img className='selected-products-image' src={"http://localhost:8000" + el.product.image} alt="" />
                     <div className='selected-products-title'>{el.product.title}</div>
                     <div className='selected-products-color'>{el.product.product_color}</div>
                     <div className='selected-products-price'>{el.product.price + "₴"}</div>
                  </div>
                  <button onClick={() => deleteFromLiked(el.id)} className='selected-products-delete' >видалити з обраних</button>
               </div>
            ))
         }
      </div>
   )
}

export default SelectedProducts
