import { Route } from 'react-router';
import Accessories from './components/MainContent/Accessories/Accessories';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/MainContent/Main/Main';
import Phones from './components/MainContent/Phones/Phones';
import './MobiGood.css';
import ForAuto from './components/MainContent/ForAuto/ForAuto';
import AboutUs from './components/MainContent/AboutUs/AboutUs';
import Profile from './components/MainContent/Profile/Profile';
import PhonePage from './components/MainContent/Phones/PhonePage';

function MobiGood(props) {
  return (
    <div className="MobiGood">
      <div className="header">
        <HeaderContainer />
      </div>
      <div className="main-content">
        <Route exact path="/" render={() => <Main />} />
        <Route path="/phones" render={() => <Phones />} />
        <Route path="/accessories" render={() => <Accessories />} />
        <Route path="/forauto" render={() => <ForAuto />} />
        <Route path="/aboutus" render={() => <AboutUs />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/phone/:phoneId?" render={() => <PhonePage />} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MobiGood;
