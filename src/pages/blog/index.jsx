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
      <div className="MainHeading">
        <h1 className="MainHeading">
          <strong>Why to choose Geography as an optional?</strong>
        </h1>
        <p>
          &nbsp; Today I will tell you 7 concrete reasons of why you must choose
          Geography as your optional to get your name in the final list of UPSC
          CSE 2023-24
        </p>
        <h3>
          1
          <u>
            <strong>.Role of Geography in overall selection</strong>
          </u>
        </h3>
        <p>
          ● Geography as an optional subject has the highest overlap with the
          entire general study syllabus and preparation
        </p>

        <p>
          . ● Therefore, the scores of geography optional students are more
          buoyant, contributing to an extra 40-50 marks in mains as well an
          extra 10-20 marks in prelims.
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
