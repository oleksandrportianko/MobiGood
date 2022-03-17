import './CartModal.css'
import { Container, Image, Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import emptyCart from '../../../assets/img/empty-cart.png'
import close from '../../../assets/img/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeQtyCartPhones, deleteCartPhones } from '../../../redux/Reducers/authReducer'
import minus from '../../../assets/img/minus.svg'
import plus from '../../../assets/img/plus.svg'

const CartModal = (props) => {
   const cartCount = useSelector((state) => state.auth.cart?.total_products)
   const cart = useSelector((state) => state.auth.cart)
   const dispatch = useDispatch()

   console.log(cart)

   const deleteFromCart = (id) => {
      dispatch(deleteCartPhones(id))
   }

   const cartProductQtyMinus = (qty, id) => {
      let newqty = qty - 1
      dispatch(changeQtyCartPhones(newqty, id))
   }

   const cartProductQtyPlus = (qty, id) => {
      let newqty = qty + 1
      dispatch(changeQtyCartPhones(newqty, id))
   }

   return (
      <Modal show={props.show} size="lg" aria-labelledby="cart-modal" centered>
         <Modal.Header className="cart-modal-header ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="cart-modal-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0 text-white"> Корзина </p>
               <Image className="cart-modal-header-image-close" onClick={props.onHide} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="cart-body-container d-flex flex-column align-items-center p-0" >
            {!cartCount >= 1 || cartCount === '' ?
               <div className="d-flex flex-column align-items-center px-2 py-5">
                  <Image className="empty-cart-image" src={emptyCart} />
                  <p className="cart-empty-text p-0 m-0">Ваша корзина пуста</p>
                  <p className="cart-empty-text p-0 m-0">Поверніться назад щоб продовжити покупки</p>
               </div>
               : <div className='w-100'>
                     { cart.products.map((el, idx) => (
                     <div key={el.id} className="w-100 mt-3 mb-2">
                        <div className="cart-products-wrapper px-3">
                           <div className='d-flex align-items-center'>
                              <span className='cart-products-id' >{idx + 1}</span>
                              <img className='cart-products-image' src={"http://localhost:8000" + el.product.image} alt="" />
                              <div className='cart-products-title'>{el.product.title}</div>
                              <div className='cart-products-color'>{el.product.product_color}</div>
                              <div className='cart-products-price'>{el.product.price + "₴"}</div>
                           </div>
                           <div className="d-flex align-items-center">
                              <img onClick={() => cartProductQtyMinus(el.qty, el.product.id)} className="cart-products-count-minus me-2" src={minus} alt="" />
                              <div className='cart-products-count'>{el.qty}</div>
                              <img onClick={() => cartProductQtyPlus(el.qty, el.product.id)} className="cart-products-count-plus ms-2" src={plus} alt="" />
                           </div>
                           <div className='cart-products-final-qty'>{el.final_price}</div>
                           <button onClick={() => deleteFromCart(el.id)} className='cart-products-delete'><img className='cart-modal-delete-product' src={close} alt="" /></button>
                        </div>
                     </div>
                     ))}
                  <div className='cart-products-final-price'>Загальна сума: <span className='cart-products-price-text'>₴{cart.final_price}</span></div>
                  </div>
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
