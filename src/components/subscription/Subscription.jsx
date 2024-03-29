import './subscription.css';
import { Link } from 'react-router-dom';



function Subscription({item}) {
  
  
  return (
    <div className="subscription">
        <Link to={`/subscribe/${item.name}`}>
            <div className="subscriptionCard">
              <img 
                  src="" 
                  alt="" 
                  className="subscriptionImg" 
              />
              <div className="subscriptionDetails">
                  
                  <h2 className="subsTitle">{item.name}</h2>
                  
              </div>
            </div>
            
        </Link>
    </div>
  );
}

export default Subscription;