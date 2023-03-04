import './subscriptions.css';
import useFetch from "../../hooks/useFetch";
import Navbar from '../../components/navbar/Navbar';
import Subscription from '../../components/subscription/Subscription';



function Subscriptions() {
  
  const {data, loading, reFetch} = useFetch(`https://solscription-deployer-api.onrender.com/api/subscriptions?name=0x1102`)

  console.log(data)

  
  return (
    <div className="subscriptions">
      <div className="subscriptionsContainer">
        <div className="subscriptionsWrapper">
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

export default Subscriptions;