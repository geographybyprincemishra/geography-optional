import Header from '../../components/header';
import Logo from '../../components/logo';
import Menu from '../../components/menu';
import './styles.css';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import FoundationPage from '../foundation';
import WriteUpComponent from '../../components/writeUp';


function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="Header">
        <Header />
      </div>

      <div className="LogoBanner">
        <div>
          <Logo />
        </div>
        <div>
          <Menu />
        </div>
      </div>

      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <WriteUpComponent />} />
          <Route path="foundation" element={ <FoundationPage/> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default LandingPage;