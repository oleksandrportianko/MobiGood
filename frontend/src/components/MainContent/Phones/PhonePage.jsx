import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCurrentPhone } from '../../../redux/Reducers/phonesReducer'


const PhonePage = () => {   
   const dispatch = useDispatch()
   let { phoneId } = useParams()
   const currentPhoneData = useSelector((state) => state.phones.currentPhone)
   console.log(currentPhoneData)
   let colorsObj = []

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
            </div>
          </div>
       </div>
    </div>
  )
}

export default PhonePage