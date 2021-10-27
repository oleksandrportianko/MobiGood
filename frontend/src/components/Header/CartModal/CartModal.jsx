import './CartModal.css'
import { Container, Image, Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import emptyCart from '../../../assets/img/empty-cart.png'
import close from '../../../assets/img/close.png'

const CartModal = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="cart-modal"
         centered
      >
         <Modal.Header className="ps-2 p-1 p-sm-3 d-flex justify-content-between">
            <Container fluid className="cart-model-title p-0 d-flex justify-content-between align-items-center">
               <p className="m-0"> Корзина </p>
               <Image onClick={props.closeModal} width="20px" height="20px" src={close} />
            </Container>
         </Modal.Header>
         <Modal.Body className="d-flex flex-column align-items-center" >
            {props.countItemsCart === 0 ?
               <div className="d-flex flex-column align-items-center">
                  <Image className="empty-cart-image" src={emptyCart} />
                  <p className="cart-empty-text p-0 m-0">Ваша корзина пуста</p>
                  <p className="cart-empty-text p-0 m-0">Поверніться назад щоб продовжити покупки</p>
               </div>
               : "items"}
         </Modal.Body>
         <Modal.Footer className="p-1 justify-content-end">
            <Button className="cart-model-button-back" onClick={props.closeModal}>Повернутися назад</Button>
            {props.countItemsCart !== 0 ?
               <Button className="cart-model-button-order" onClick={() => alert('nice')}>Замовити зараз</Button>
               : ""}
         </Modal.Footer>
      </Modal>
   )
}

export default CartModal
