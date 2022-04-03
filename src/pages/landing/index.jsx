import Header from '../../components/header';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import Menu from '../../components/menu';
import './styles.css';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import FoundationPage from '../foundation';
import BlogPage from '../blog';
import BlogPageOne from '../blogone';
import BlogPageTwo from '../blogtwo';
import OptionalSyllabusPage from '../optionalsyllabus'; 
import SyllabusPage from '../syllabus'; 
import PYPPage from '../pyp';
import AboutUPSCPage from '../aboutupsc';
import ContactUsPage from '../contactus';
import PAPERI2021 from '../paper1_2021';
import PAPERII2021 from '../paper2_2021';

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

      
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <WriteUpComponent />} />
          <Route path="foundation" element={ <FoundationPage/> } />
          <Route path="blog" element={ <BlogPage/> } />
          <Route path="syllabus" element={ <SyllabusPage/> } />
          <Route path="optionalsyllabus" element={ <OptionalSyllabusPage/> } />
          <Route path="pyp" element={ <PYPPage/> } />
          <Route path="blogone" element={ <BlogPageOne/> } />
          <Route path="blogtwo" element={ <BlogPageTwo/> } />
          <Route path="paper1_2021" element={ <PAPERI2021/> } />
          <Route path="paper2_2021" element={ <PAPERII2021/> } />
          <Route path="aboutupsc" element={ <AboutUPSCPage/> } />
          <Route path="contactus" element={ <ContactUsPage/> } />
                 </Routes>
      </BrowserRouter>
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;