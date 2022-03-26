
import {Link} from 'react-router-dom';

import Blogpic from '../images/blogpic.png';
import './styles.css';



const BlogPageTwo = () => {
    return <div className='contentContainer'>
  
  {/* <div className='blogpic'>
      <img src={Blogpic} align='left' alt="Why to choose Geography as an optional?"/>
    </div> */}
    <div className='MainHeading'>
    <h1 className='MainHeading'><strong>Why to choose Geography as an optional?</strong></h1>
    <p>&nbsp; Today I will tell you 7 concrete reasons of why you must choose Geography as your optional to get your name in the final list of UPSC CSE 2023-24</p>
    <h3>1<u><strong>.Role of Geography in overall selection</strong></u></h3>

<p><strong><em>Thank You all for being patient with me and we can further take up some of your individual doubts and questions.</em></strong></p>
<Link align='right' to='/blog'> See less</Link>




 </div>
    </div>
 
}
export default BlogPageTwo;