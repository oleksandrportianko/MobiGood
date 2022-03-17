import './CartModal.css'
import { Container, Image, Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import emptyCart from '../../../assets/img/empty-cart.png'
import close from '../../../assets/img/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartPhones } from '../../../redux/Reducers/authReducer'

const CartModal = (props) => {
   const cartCount = useSelector((state) => state.auth.cart?.total_products)
   const cart = useSelector((state) => state.auth.cart)
   const dispatch = useDispatch()

   const deleteFromCart = (id) => {
      dispatch(deleteCartPhones(id))
   }

   return (
      <Modal show={props.show} size="lg" aria-labelledby="cart-modal" centered>
         <Modal.Header className="cart-modal-header ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="cart-modal-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0 text-white"> Корзина </p>
               <Image className="cart-modal-header-image-close" onClick={props.onHide} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column align-items-center" >
            {!cartCount >= 1 || cartCount === '' ?
               <div className="d-flex flex-column align-items-center">
                  <Image className="empty-cart-image" src={emptyCart} />
                  <p className="cart-empty-text p-0 m-0">Ваша корзина пуста</p>
                  <p className="cart-empty-text p-0 m-0">Поверніться назад щоб продовжити покупки</p>
               </div>
               : cart.products.map((el, idx) => (
                  <div key={el.id} className="w-100">
                     <div className="selected-products-wrapper">
                        <div className='d-flex align-items-center'>
                           <span className='selected-products-id' >{idx + 1}</span>
                           <img className='selected-products-image' src={"http://localhost:8000" + el.product.image} alt="" />
                           <div className='selected-products-title'>{el.product.title}</div>
                           <div className='selected-products-color'>{el.product.product_color}</div>
                           <div className='selected-products-price'>{el.product.price + "₴"}</div>
                           <div className='selected-products-qty'>{el.final_price}</div>
                        </div>
                        <button onClick={() => deleteFromCart(el.id)} className='selected-products-delete'><img className='cart-modal-delete-product' src={close} alt="" /></button>
                     </div>
                     <div className='selected-products-final-price'>{el.final_price}</div>
                  </div>
                  )
               )
            }
         </Modal.Body>
         <Modal.Footer className="p-1 justify-content-end">
            <Button className="cart-modal-button-back" onClick={props.onHide}>Повернутися назад</Button>
            {cartCount >= 1 ?
               <Button className="cart-modal-button-order" onClick={() => alert('nice')}>Замовити зараз</Button>
               : ""}
         </Modal.Footer>
      </Modal>
   )
}

export default CartModal
