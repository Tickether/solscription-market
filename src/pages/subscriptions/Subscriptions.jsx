import './subscriptions.css';
import useFetch from "../../hooks/useFetch";
import Merchant from '../../components/merchant/Merchant';



function Subscriptions() {
  
  const {data, loading} = useFetch(`https://solscription-deployer-api.onrender.com/api/merchants`)

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
                <Merchant item={item} key={item.name}/>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;