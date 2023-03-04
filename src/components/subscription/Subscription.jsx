import './subscription.css';
import { Link } from 'react-router-dom';



function Subscription({item}) {
  
  
  return (
    <div className="subscription">
        <Link to={`/subscribe/${item.contractAddress}`}>
            <img 
                src="" 
                alt="" 
                className="subscriptionImg" 
            />
            <div className="subscriptionDetails">
                
                <h2 className="siTitle">{item.contractAddress}</h2>
                <span className="siGenre">{item.chain}</span>
                
            </div>
        </Link>
    </div>
  );
}

export default Subscription;