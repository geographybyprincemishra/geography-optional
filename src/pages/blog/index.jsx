import { Link } from "react-router-dom";
import BlogPageOne from "../blogone";
import Blogpic from "../images/blogpic.png";
import "./styles.css";

const BlogPage = () => {
  return (
    <div className="contentContainer">
      {/* <div className='blogpic'>
      <img src={Blogpic} align='left' alt="Why to choose Geography as an optional?"/>
    </div> */}
        <div className='MainHeading'>
        <h1 className='MainHeading'><strong>Last 60 Days Strategy to crack UPSC CSE Prelims 2022</strong></h1>
    <p className="color-black">To become an IAS officer, an aspirant need to qualify all the three stages of Civil services examination i.e. 
    .</p>
 



<p className="color-black">•	Prelims</p>
<p className="color-black">•	Mains</p>
<p className="color-black">•	Personality Test</p>
<p className="color-black">Over the years Prelims stage is becoming more crucial. The success rate in this stage is between 1-1.5% (approx. 1 million candidates fill up the form and only about 12 - 15K clear for the next stage) as compared to Mains where success rate is about 20% and in Personality Test it is about 30%.</p>
   

        <p>
     
          <Link align="right" to="/blogtwo">
            {" "}
            Read more
          </Link>{" "}
        </p>
      </div>
      <div className="MainHeading">
      <h1 className='MainHeading'><strong>Why to choose Geography as an optional?</strong></h1>
    <p className="color-black">Geography is a quintessential subject, that has ignited the curiosity of individuals since ancient times.</p>
    
    <p className="color-black">Eratosthenes defined geography as “study of earth surface as the home of man.” This description of geography makes it an all-encompassing subject. This all-encompassing aspect of geography manifests as Geo-economics, Geo-politics, Biogeography, Oceanography, Climatology, Geomorphology etc.</p>

<p className="color-black">Given geography’s wide scope, Aspirants find an amazing opportunity through geography to inculcate a refined intellect, that will not only help in acing civil services examination but also helps in becoming better informed human beings.</p>

<p className="color-black">Geography has been one of the most popular optional in the history of civil services examination and year on year a lot of individuals have secured Top100 ranks with Geography optional. But when a new student enters in the arena of UPSC preparation they face a daunting task related to optional selection as they know it very well that in whole UPSC CSE this is the only subject in which they have option to choose among the list of subjects but if this option has not been selected rationally then it can hamper the dream of aspirants to become an IAS officer.</p>

<p className="color-black">So, to help those aspirants who are thinking to opt Geography optional I am going to tell you following reasons why you must choose Geography as an Optional.</p>

        <p>
     
          <Link align="right" to="/blogone">
            {" "}
            Read more
          </Link>{" "}
        </p>
      </div>

  
    </div>
  );
};
export default BlogPage;
