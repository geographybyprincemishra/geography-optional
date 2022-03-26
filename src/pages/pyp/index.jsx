

import './styles.css';
import {Link} from 'react-router-dom';
import PAPERI2021 from '../paper1_2021';
import PAPERII2021 from '../paper2_2021';


const PYPPage = () => {
    return <div className='contentContainer'>
  
    
    
    <h2 className='MainHeading'><strong>Year 2021</strong></h2>
    <ul><li><Link align='left' to='/paper1_2021'><h3><u>Paper 1</u></h3> </Link> </li>
    <li><Link align='left' to='/paper2_2021'><h3><u> Paper 2</u></h3> </Link> </li>
    </ul>
    
    
 
    </div>
 
}
export default PYPPage;