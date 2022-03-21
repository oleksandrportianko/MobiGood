import React from 'react'
import './AboutUs.css'
import logo from '../../../assets/img/logo.svg'
import logoText from '../../../assets/img/logo-text.svg'

const AboutUs = () => {
   return (
      <div className='aboutus-wrapper'>
         <div className='aboutus-lable'>Про нас</div>
         <p className='aboutus-header-text'>MobiGood - маленький магазин з грандіозними планами</p>
         <div className='aboutus-logo'>
            <img className='aboutus-logo-img' src={logo} alt="" />
            <img className='aboutus-logo-text-img' src={logoText} alt="" />
         </div>
         <div className='aboutus-block'>
            <p className='aboutus-title-block'>
               Наші цілі на майбутнє 
            </p>
            <div className='aboutus-text-block'>
               Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому і пошук тієї самої речі має бути швидким, зручним та приємним. Ми не просто продаємо побутову техніку, електроніку, прикраси чи вино. Ми допомагаємо знайти саме те, що потрібно, в одному місці та без зайвих хвилювань, щоб ви не витрачали життя на пошуки, а просто жили щасливо. MobiGood – це універсальна відповідь на будь-який запит, початок пошуку та його кінцеву зупинку, справжній помічник. Ми назавжди позбавляємо своїх покупців неприємних компромісів, виконуємо бажання і дозволяємо мріяти сміливіше. Завдяки розумному пошуку та чесному сервісу ми робимо життя наших клієнтів трохи кращим прямо зараз.
            </div>
         </div>
         <div className='aboutus-block'>
            <p className='aboutus-title-block'>
               Щастя починається з простих речей
            </p>
            <div className='aboutus-text-block'>
            І ми допомагаємо знайти ці речі: закоханим підказуємо чим здивувати один одного; спортивних мотивуємо ніколи не здаватися та швидше прогресувати; господарським даємо можливість створити справжній затишок. Ми хочемо, щоб ви знали, що шукаєте, і могли б аргументувати свій вибір. Для цього ми знімаємо відеоогляди, пишемо статті та відстежуємо новинки.
            </div>
         </div>
         <div className='aboutus-block'>
            <p className='aboutus-title-block'>
               Щоб мрії здійснювалися легко
            </p>
            <div className='aboutus-text-block'>
               Ми відкриваємо величезні офлайн-магазини, щоб ви могли прийти, потримати в руках і протестувати продукт, що сподобався. Ми хочемо, щоб у нас був найкращий у світі сервіс, тому навчаємо співробітників не лише технічній стороні роботи, а й роботі з клієнтом. А якщо вам, навпаки, хочеться поменше спілкуватися з людьми — для цього ми маємо поштоматів: зробили замовлення, вибрали поштамат, забрали дорогою додому або на роботу. Усе.
            </div>
         </div>
      </div>
   )
}

export default AboutUs
