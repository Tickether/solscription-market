import './merchant.css';
import { Link } from 'react-router-dom';
import Netflix from '../../assets/netflix.jpg'



function Merchant({item}) {
  
  
  return (
    <div className="merchant">
        <Link to={`/subscribe/${item.name}`}>
            <div className="merchantCard">
              <img 
                  src={Netflix} 
                  alt="" 
                  className="merchantImg" 
              />
              <div className="merchantDetails">
                  
                  <h2 className="merchantTitle">{item.name}</h2>
                  
              </div>
            </div>
            
        </Link>
    </div>
  );
}

export default Merchant;