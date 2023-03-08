import './subscribes.css';
import useFetch from "../../hooks/useFetch";
import solscription from '../../solscription.json';
import { useLocation } from 'react-router-dom';
import Subscription from '../../components/subscription/Subscription';



function Subscribes() {

  const location = useLocation();

  const name = location.pathname.split("/")[2];
  
  const {data, loading} = useFetch(`https://solscription-deployer-api.onrender.com/api/merchants/subscriptions/${name}`)
  
  console.log(data)

  
  return (
    <div className="subscribes">
      <div className="subscribesContainer">
        <div className="subscribesWrapper">
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map(item=>(
                <Subscription item={item} key={item.contractAddress}/>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribes;