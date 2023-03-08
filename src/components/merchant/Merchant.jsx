import './merchant.css';
import { Link } from 'react-router-dom';



function Merchant({item}) {
  
  
  return (
    <div className="merchant">
        <Link to={`/subscribe/${item.name}`}>
            <div className="subscriptionCard">
              <img 
                  src="" 
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