import phone from '../../assets/img/phone.png';
import headset from '../../assets/img/headset.png';
import wheel from '../../assets/img/wheel.png';
import aboutus from '../../assets/img/aboutus.png';

let initialState = {
  headerItems: [
    { id: 1, name: 'Телефони', image: `${phone}`, url: '/phones' },
    { id: 2, name: 'Аксесуари', image: `${headset}`, url: '/accessories' },
    { id: 3, name: 'Для авто', image: `${wheel}`, url: '/forauto' },
    { id: 4, name: 'Про нас', image: `${aboutus}`, url: '/aboutus' },
  ],
};

let mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default mainReducer;
