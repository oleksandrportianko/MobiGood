import { Route } from 'react-router';
import Accessories from './components/MainContent/Accessories/Accessories';
import Cart from './components/MainContent/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main/Main';
import Phones from './components/MainContent/Phones/Phones';
import './MobiGood.css';
import ForAuto from './components/MainContent/ForAuto/ForAuto';
import AboutUs from './components/MainContent/AboutUs/AboutUs';

function MobiGood() {
  return (
    <div className="MobiGood">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <Route exact path="/" render={() => <Main />} />
        <Route path="/phones" render={() => <Phones />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/accessories" render={() => <Accessories />} />
        <Route path="/forauto" render={() => <ForAuto />} />
        <Route path="/aboutus" render={() => <AboutUs />} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MobiGood;
