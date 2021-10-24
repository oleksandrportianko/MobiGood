import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './MobiGood.css';

function MobiGood() {
  return (
    <div className="MobiGood">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MobiGood;
