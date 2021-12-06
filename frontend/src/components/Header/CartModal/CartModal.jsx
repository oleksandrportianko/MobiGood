import './CartModal.css'
import { Container, Image, Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import emptyCart from '../../../assets/img/empty-cart.png'
import close from '../../../assets/img/close.svg'
import { useSelector } from 'react-redux'
import { ApiService } from '../../../api/api'
import { useEffect, useState } from 'react'

const CartModal = (props) => {
   const phonesInCart = useSelector((state) => state.cart.items)
   const countItemsCart = useSelector((state) => state.cart.countItemsCart)
   const [state, setState] = useState([])

   useEffect(() => {
      if (countItemsCart !== 0) {
         ApiService.GetPhonesById(phonesInCart[0]).then((data) => setState([data]))
         console.log(state)
      }
   }, [countItemsCart]) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <Modal show={props.show} size="lg" aria-labelledby="cart-modal" centered>
         <Modal.Header className="cart-modal-header ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="cart-modal-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0 text-white"> Корзина </p>
               <Image className="cart-modal-header-image-close" onClick={props.onHide} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column align-items-center" >
            {countItemsCart === 0 ?
               <div className="d-flex flex-column align-items-center">
                  <Image className="empty-cart-image" src={emptyCart} />
                  <p className="cart-empty-text p-0 m-0">Ваша корзина пуста</p>
                  <p className="cart-empty-text p-0 m-0">Поверніться назад щоб продовжити покупки</p>
               </div>
               : state.map((el) => {
                  return <div>{el.id}</div>
               })
            }
         </Modal.Body>
         <Modal.Footer className="p-1 justify-content-end">
            <Button className="cart-modal-button-back" onClick={props.onHide}>Повернутися назад</Button>
            {countItemsCart !== 0 ?
               <Button className="cart-modal-button-order" onClick={() => alert('nice')}>Замовити зараз</Button>
               : ""}
         </Modal.Footer>
      </Modal>
   )
}

export default CartModal
